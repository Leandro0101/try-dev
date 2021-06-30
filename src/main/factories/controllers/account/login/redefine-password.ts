import { RedefinePasswordController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeRedefinePasswordService } from '../../../services'
import { makeRedefinePasswordValidations } from '../../../validations'

export const makeRedefinePasswordController = (): IController => {
  return new RedefinePasswordController(makeRedefinePasswordService(), makeRedefinePasswordValidations())
}
