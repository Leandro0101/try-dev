import { ILoadUserByIdUseCase } from '@domain/usecases'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../../protocols'
import { badRequest, notFound, ok, serverError } from '../../../helpers/http'
import { ResourceNotFoundError } from '../../../errors'

export class LoadUserByIdController implements IController {
  constructor (
    private readonly loadUserByIdService: ILoadUserByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) return badRequest(error)

      const response = await this.loadUserByIdService.execute(httpRequest.params.id)
      const { content, failValidations: fail } = response

      if (fail) return notFound(new ResourceNotFoundError('user'))

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
