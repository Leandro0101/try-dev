import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { RedefinePasswordController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeRedefinePasswordService } from '../../../services'
import { makeRedefinePasswordValidations } from '../../../validations'

export const makeRedefinePasswordController = (): IController => {
  const controller = new RedefinePasswordController(makeRedefinePasswordService(), makeRedefinePasswordValidations())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
