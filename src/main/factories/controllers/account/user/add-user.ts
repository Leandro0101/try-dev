import { AddUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddUserValidations } from '../../../validations'
import { makeAddUserService, makeSendAccountVerificationEmailService } from '../../../services'
import { LogControllerDecorator } from '../../../../decorators/log'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { resolve } from 'path'
import { queueSystem } from '@/src/infra/queue-system-bull/bull'

export const makeAddUserController = (): IController => {
  const emailTemplatePath = resolve(__dirname, '..', '..', '..', '..', '..', 'templates', 'email-confirmation.hbs')
  const addUserController = new AddUserController(makeAddUserService(), makeAddUserValidations(), makeSendAccountVerificationEmailService(), emailTemplatePath, queueSystem)

  return new LogControllerDecorator(addUserController, new AddLogErrorRepository())
}
