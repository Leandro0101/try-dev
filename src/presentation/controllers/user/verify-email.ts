import { IVerifyEmailUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class VerifyEmailController implements IController {
  constructor (private readonly verifyEmail: IVerifyEmailUseCase) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { token } = httpRequest.params
    const tokenValue = await this.verifyEmail.execute(token)
    return ok(tokenValue)
  }
}
