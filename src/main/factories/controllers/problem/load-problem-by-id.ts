import { LoadProblemByIdController } from '@/src/presentation/controllers/problem/load-problem-by-id'
import { IController } from '@presentation/protocols'
import { makeLoadProblemByIdService } from '../../services/problem/load-problem-by-id'
import { makeLoadProblemByIdValidations } from './load-problem-by-id-validations'

export const makeLoadProblemByIdController = (): IController => {
  return new LoadProblemByIdController(makeLoadProblemByIdService(), makeLoadProblemByIdValidations())
}
