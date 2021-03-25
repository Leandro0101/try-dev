import { AddSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddSolutionService } from '../../services'
import { makeValidationComposite } from './validation'

export const makeAddSolutionController = (): IController => {
  const addSolutionController = new AddSolutionController(makeAddSolutionService(), makeValidationComposite())

  return addSolutionController
}
