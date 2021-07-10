import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { VerifyEmailController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeVerifyEmailService } from '../../../services'

export const makeVerifyEmailController = (): IController => {
  const controller = new VerifyEmailController(makeVerifyEmailService())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
