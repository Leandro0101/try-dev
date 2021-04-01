import { AddProblemController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddProblemService } from '../../services/'
import { makeAddProblemValidation } from '../validations'

export const makeAddProblemController = (): IController => {
  const addProblemController: IController = new AddProblemController(
    makeAddProblemService(), makeAddProblemValidation())

  return addProblemController
}
