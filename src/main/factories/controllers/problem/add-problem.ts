import { AddProblemController } from '@presentation/controllers/problem/add-problem'
import { IController } from '@presentation/protocols'
import { makeAddProblemService } from '../../services/problem/add-problem'
import { makeAddProblemValidation } from './add-problem-validations'

export const makeAddProblemController = (): IController => {
  const addProblemController: IController = new AddProblemController(
    makeAddProblemService(), makeAddProblemValidation())

  return addProblemController
}
