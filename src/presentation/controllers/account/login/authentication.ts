import { IAuthenticationUseCase } from '@domain/usecases'
import { badRequest, ok, unauthorized } from '../../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../../protocols'

export class AuthenticationController implements IController {
  constructor (
    private readonly authentication: IAuthenticationUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) return badRequest(error)

    const { email, password } = httpRequest.body
    const response = await this.authentication.execute({ email, password })
    const { content, failValidations: fail } = response

    if (fail) return unauthorized()

    return ok(content)
  }
}
