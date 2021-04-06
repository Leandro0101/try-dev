import { EditSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeEditSolutionService } from '../../services'
import { makeEditSolutionValidations } from '../validations'

export const makeEditSolutionController = (): IController => {
  const editSolutionController = new EditSolutionController(
    makeEditSolutionService(), makeEditSolutionValidations())

  return editSolutionController
}
