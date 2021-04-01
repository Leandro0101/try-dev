import { LoadProblemsByUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadProblemsByUserService } from '../../services'
import { makeLoadProblemsByUserValidations } from '../validations'

export const makeLoadProblemsByUserController = (): IController => {
  return new LoadProblemsByUserController(
    makeLoadProblemsByUserService(),
    makeLoadProblemsByUserValidations()
  )
}
