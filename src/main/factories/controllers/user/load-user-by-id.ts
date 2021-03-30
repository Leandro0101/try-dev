import { LoadUserByIdController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadUserByIdService } from '../../services'
import { makeLoadUserByIdValidation } from './load-user-by-id-validation'

export const makeLoadUserByIdController = (): IController => {
  return new LoadUserByIdController(makeLoadUserByIdService(), makeLoadUserByIdValidation())
}
