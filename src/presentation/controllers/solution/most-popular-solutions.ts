import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { IMostPopularSolutionsUseCase } from '@domain/usecases'
import { badRequest, notFound, ok, serverError } from '../../helpers/http'
import { ResourceNotFoundError } from '../../errors'

export class MostPopularSolutionsController implements IController {
  constructor (
    private readonly mostPopularSolutions: IMostPopularSolutionsUseCase,
    private readonly validations: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { page } = httpRequest.query
      const { problemId } = httpRequest.params
      const error = this.validations.validate({ page, problem: problemId })
      if (error) return badRequest(error)

      const response = await this.mostPopularSolutions.execute(problemId, Number(page))
      const { content, failValidations: fail } = response

      if (fail) return notFound(new ResourceNotFoundError('problem'))

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
