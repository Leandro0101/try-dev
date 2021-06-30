import { IRedefinePasswordUseCase } from '@domain/usecases'
import { UnauthorizedError } from '../../../errors'
import { badRequest, forbidden, ok, serverError } from '../../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../../protocols'

export class RedefinePasswordController implements IController {
  constructor (
    private readonly redefinePassword: IRedefinePasswordUseCase,
    private readonly validation: IValidation
  ) { }

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { token } = httpRequest.params
      const { password } = httpRequest.body
      const error = this.validation.validate({ password })
      if (error) return badRequest(error)
      const response = await this.redefinePassword.execute(token, password)
      const { failValidations, content } = response
      if (failValidations) return forbidden(new UnauthorizedError())
      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
