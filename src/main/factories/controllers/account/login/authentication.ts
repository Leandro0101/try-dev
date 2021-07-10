import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { AuthenticationController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAuthenticationService } from '../../../services'
import { makeAuthenticationValidations } from '../../../validations'

export const makeAuthenticationController = (): IController => {
  const controller = new AuthenticationController(makeAuthenticationService(), makeAuthenticationValidations())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
