import { IController } from '@presentation/protocols'
import { SendPasswordResetEmailController } from '@presentation/controllers'
import { makeSendPasswordResetEmailService } from '../../services'
import { makeSendPasswordResetEmailValidation } from '../../validations'

export const makeSendPasswordResetEmailController = (): IController => {
  const service = makeSendPasswordResetEmailService()
  const validation = makeSendPasswordResetEmailValidation()
  return new SendPasswordResetEmailController(service, validation, '')
}
