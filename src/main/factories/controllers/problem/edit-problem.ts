import { EditProblemController } from '@presentation/controllers'
import { makeEditProblemValidations } from '../validations'
import { makeEditProblemService } from '../../services'
import { IController } from '@presentation/protocols'

export const makeEditProblemController = (): IController => {
  return new EditProblemController(makeEditProblemService(), makeEditProblemValidations())
}
