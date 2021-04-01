import { LoadProblemsByUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadProblemsByUserService } from '../../services'
import { makeLoadProblemsByUserValidations } from './load-problems-by-user-validations'

export const makeLoadProblemsByUserController = (): IController => {
  return new LoadProblemsByUserController(
    makeLoadProblemsByUserService(),
    makeLoadProblemsByUserValidations()
  )
}
