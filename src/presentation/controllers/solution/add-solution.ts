import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { IAddSolutionUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'

export class AddSolutionController implements IController {
  constructor (private readonly addSolutionService: IAddSolutionUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId, problemId } = httpRequest.params
      const { sourceCode, description } = httpRequest.body
      const error = this.validation.validate({ userId, problemId, description, sourceCode })
      if (error) return badRequest(error)

      const response = await this.addSolutionService.execute({
        userId, problemId, description, sourceCode
      })
      const { content, failValidations: fail } = response

      if (fail) return forbidden(new ResourceNotFoundError('problem or user'))

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
