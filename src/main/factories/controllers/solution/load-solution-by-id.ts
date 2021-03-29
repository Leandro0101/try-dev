import { IController } from '@presentation/protocols'
import { LoadSolutionByIdController } from '@presentation/controllers'
import { makeLoadSolutionByIdService } from '../../services'

export const makeLoadSolutionByIdController = (): IController => {
  return new LoadSolutionByIdController(makeLoadSolutionByIdService())
}
