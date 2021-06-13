import { SendEmailController } from '@/src/presentation/controllers/user/email-test'
import { IController } from '@presentation/protocols'

export const makeEmailTestController = (): IController => {
  return new SendEmailController()
}
