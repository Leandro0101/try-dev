import { SendAccountVerificationEmailController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadUserByIdService, makeSendAccountVerificationEmailService, makeVerifyUserStatusService } from '../../../services'
import { makeSendAccountVerificationEmailValidation } from '../../../validations'
import { resolve } from 'path'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'

export const makeSendAccountVerificationEmailController = (): IController => {
  const emailTemplatePath = resolve(__dirname, '..', '..', '..', '..', '..', 'templates', 'email-confirmation.hbs')
  const controller = new SendAccountVerificationEmailController(
    makeSendAccountVerificationEmailService(),
    makeLoadUserByIdService(),
    makeVerifyUserStatusService(),
    makeSendAccountVerificationEmailValidation(), emailTemplatePath
  )
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
