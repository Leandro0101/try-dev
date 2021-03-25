import { AddSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddSolutionService } from '../../services'
import { makeAddSolutionValidations } from './add-solution-validations'

export const makeAddSolutionController = (): IController => {
  const addSolutionController = new AddSolutionController(makeAddSolutionService(), makeAddSolutionValidations())

  return addSolutionController
}
