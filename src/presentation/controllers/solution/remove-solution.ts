import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, notFound, ok, serverError } from '../../helpers/http'
import { IRemoveSolutionUseCase } from '@domain/usecases'
import { ResourceNotFoundError, UnauthorizedError } from '../../errors'

export class RemoveSolutionController implements IController {
  constructor (
    private readonly removeSolutionService: IRemoveSolutionUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { solutionId, userId } = httpRequest.params
      const error = this.validation.validate({ solutionId })
      if (error) return badRequest(error)

      const response = await this.removeSolutionService.execute(solutionId, userId)
      const { failValidations: fail } = response

      if (fail) {
        if (fail.solutionNotFound) return notFound(new ResourceNotFoundError('solution'))
        if (fail.withoutPermission) return forbidden(new UnauthorizedError())
      }

      return ok()
    } catch (error) {
      return serverError(error)
    }
  }
}
