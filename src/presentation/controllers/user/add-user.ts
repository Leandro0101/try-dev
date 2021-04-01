import { IAddUserUseCase } from '@domain/usecases'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { EmailAlreadyRegisterError } from '../../errors/email-already-register'

export class AddUserController implements IController {
  constructor (private readonly addUserService: IAddUserUseCase, private readonly validation: IValidation) {}
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) return badRequest(error)

      const { name, email, password } = httpRequest.body
      const user = await this.addUserService.execute({ name, email, password })

      if (!user) return forbidden(new EmailAlreadyRegisterError(email))

      return ok(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
