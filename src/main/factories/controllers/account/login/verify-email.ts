import { VerifyEmailController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeVerifyEmailService } from '../../../services'

export const makeVerifyEmailController = (): IController => {
  return new VerifyEmailController(makeVerifyEmailService())
}
