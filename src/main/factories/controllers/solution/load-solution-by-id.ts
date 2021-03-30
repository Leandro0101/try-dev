import { IController } from '@presentation/protocols'
import { LoadSolutionByIdController } from '@presentation/controllers'
import { makeLoadSolutionByIdService } from '../../services'
import { makeLoadSolutionByIdValidation } from './load-solution-by-id-validation'

export const makeLoadSolutionByIdController = (): IController => {
  return new LoadSolutionByIdController(makeLoadSolutionByIdService(), makeLoadSolutionByIdValidation())
}
