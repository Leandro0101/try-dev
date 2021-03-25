import { LoadProblemByIdController } from '@/src/presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadProblemByIdService } from '../../services'
import { makeLoadProblemByIdValidations } from './load-problem-by-id-validations'

export const makeLoadProblemByIdController = (): IController => {
  return new LoadProblemByIdController(makeLoadProblemByIdService(), makeLoadProblemByIdValidations())
}
