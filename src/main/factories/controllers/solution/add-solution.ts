import { IAddSolutionUseCase } from '@domain/usecases'
import { AddSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddSolutionService } from '../../services/solution/add-solution'

export const makeAddSolutionController = (): IController => {
  const addSolutionService: IAddSolutionUseCase = makeAddSolutionService()
  const addSolutionController = new AddSolutionController(addSolutionService)

  return addSolutionController
}
