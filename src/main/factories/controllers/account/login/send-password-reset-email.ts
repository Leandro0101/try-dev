import { IController } from '@presentation/protocols'
import { SendPasswordResetEmailController } from '@presentation/controllers'
import { makeSendPasswordResetEmailService } from '../../../services'
import { makeSendPasswordResetEmailValidation } from '../../../validations'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { AddLogErrorRepository } from '@/src/infra/typeorm/repositories'

export const makeSendPasswordResetEmailController = (): IController => {
  const service = makeSendPasswordResetEmailService()
  const validation = makeSendPasswordResetEmailValidation()
  const controller = new SendPasswordResetEmailController(service, validation, '')
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
