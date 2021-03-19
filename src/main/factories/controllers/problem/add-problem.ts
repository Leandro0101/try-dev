import { AddProblemController } from '@presentation/controllers/problem/add-problem'
import { IController } from '@presentation/protocols'
import { makeAddProblemService } from '../../services/problem/add-problem'
import { makeValidationComposite } from './validations'

export const makeAddProblemController = (): IController => {
  const addProblemController: IController = new AddProblemController(makeAddProblemService(), makeValidationComposite())

  return addProblemController
}
