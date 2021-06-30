import { SendAccountVerificationEmailController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadUserByIdService, makeSendAccountVerificationEmailService, makeVerifyUserStatusService } from '../../../services'
import { makeSendAccountVerificationEmailValidation } from '../../../validations'
import { resolve } from 'path'

export const makeSendAccountVerificationEmailController = (): IController => {
  const emailTemplatePath = resolve(__dirname, '..', '..', '..', '..', '..', 'templates', 'email-confirmation.hbs')
  const controller = new SendAccountVerificationEmailController(
    makeSendAccountVerificationEmailService(),
    makeLoadUserByIdService(),
    makeVerifyUserStatusService(),
    makeSendAccountVerificationEmailValidation(), emailTemplatePath
  )
  return controller
}
