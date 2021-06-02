import { IMarkProblemAsResolvedUseCase } from '@domain/usecases'
import { IHttpRequest, IHttpResponse, IController, IValidation } from '../../protocols'
import { badRequest, forbidden, notFound, ok, serverError } from '../../helpers/http'
import { ResourceNotFoundError, UnauthorizedError } from '../../errors'

export class MarkProblemAsResolvedController implements IController {
  constructor (
    private readonly markProblemAsResolvedService: IMarkProblemAsResolvedUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { problemId, userId } = httpRequest.params
      const error = this.validation.validate({ problemId })
      if (error) return badRequest(error)
      const response = await this.markProblemAsResolvedService.execute(problemId, userId)
      const { failValidations: fail } = response
      if (fail) {
        if (fail.problemNotFound) {
          return notFound(new ResourceNotFoundError('problem'))
        }

        if (fail.hasPermission) return forbidden(new UnauthorizedError())
      }

      return ok()
    } catch (error) {
      console.log(error.stack)
      return serverError(error)
    }
  }
}
