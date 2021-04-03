import { MarkProblemAsResolvedController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeMarkProblemAsResolvedService } from '../../services'
import { makeMarkProblemAsResolvedValidation } from '../validations'

export const makeMarkProblemAsResolvedController = (): IController => {
  return new MarkProblemAsResolvedController(makeMarkProblemAsResolvedService(), makeMarkProblemAsResolvedValidation())
}
