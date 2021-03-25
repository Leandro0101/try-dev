import { AddSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddSolutionService } from '../../services/solution/add-solution'
import { makeValidationComposite } from './validation'

export const makeAddSolutionController = (): IController => {
  const addSolutionController = new AddSolutionController(makeAddSolutionService(), makeValidationComposite())

  return addSolutionController
}
