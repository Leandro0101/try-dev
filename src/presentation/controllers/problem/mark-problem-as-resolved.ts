import { IMarkProblemAsResolvedUseCase } from '@domain/usecases'
import { IHttpRequest, IHttpResponse, IController, IValidation } from '../../protocols'
import { badRequest, notFound, ok, serverError } from '../../helpers/http'
import { ResourceNotFoundError } from '../../errors'

export class MarkProblemAsResolvedController implements IController {
  constructor (
    private readonly markProblemAsResolvedService: IMarkProblemAsResolvedUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { problemId } = httpRequest.params
      const error = this.validation.validate({ problemId })
      if (error) return badRequest(error)
      const response = await this.markProblemAsResolvedService.execute(problemId)
      const { failValidations: fail } = response

      if (fail) return notFound(new ResourceNotFoundError('problem'))

      return ok()
    } catch (error) {
      return serverError(error)
    }
  }
}
