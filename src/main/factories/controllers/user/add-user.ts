import { AddUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddUserValidations } from '../validations'
import { makeAddUserService } from '../../services'
import { LogControllerDecorator } from '../../../decorators/log'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'

export const makeAddUserController = (): IController => {
  const addUserController: IController = new AddUserController(
    makeAddUserService(), makeAddUserValidations())

  return new LogControllerDecorator(addUserController, new AddLogErrorRepository())
}
