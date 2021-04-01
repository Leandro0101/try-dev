import { LoadUserByIdController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadUserByIdService } from '../../services'
import { makeLoadUserByIdValidation } from '../validations'

export const makeLoadUserByIdController = (): IController => {
  return new LoadUserByIdController(makeLoadUserByIdService(), makeLoadUserByIdValidation())
}
