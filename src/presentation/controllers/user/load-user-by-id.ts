import { ILoadUserByIdUseCase } from '@domain/usecases'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { ResourceNotFoundError } from '../../errors'

export class LoadUserByIdController implements IController {
  constructor (
    private readonly loadUserByIdService: ILoadUserByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)

      if (error) return badRequest(error)

      const user = await this.loadUserByIdService.execute(httpRequest.params.id)

      if (!user) return forbidden(new ResourceNotFoundError('user'))

      return ok(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
