import { SendMessageAdapter } from '@/src/infra/SES/SES-mail-sender-adapter'
import { ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class SendEmailController implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    await new SendMessageAdapter().run()
    return ok()
  }
}
