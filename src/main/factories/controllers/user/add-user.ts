import { AddUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddUserValidations } from '../validations'
import { makeAddUserService } from '../../services'

export const makeAddUserController = (): IController => {
  const addUserController: IController = new AddUserController(makeAddUserService(), makeAddUserValidations())

  return addUserController
}
