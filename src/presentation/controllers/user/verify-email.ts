import { IVerifyEmailUseCase } from '@domain/usecases'
import { UnauthorizedError } from '../../errors'
import { forbidden, ok, serverError } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class VerifyEmailController implements IController {
  constructor (private readonly verifyEmail: IVerifyEmailUseCase) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { token } = httpRequest.params
      const response = await this.verifyEmail.execute(token)
      const { failValidations, content } = response
      if (failValidations) return forbidden(new UnauthorizedError())
      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
