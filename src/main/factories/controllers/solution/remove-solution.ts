import { IController } from '@/src/presentation/protocols'
import { RemoveSolutionController } from '@presentation/controllers'
import { makeRemoveSolutionService } from '../../services/solution/remove-solution'
import { makeRemoveSolutionValidations } from '../validations'

export const makeRemoveSolutionController = (): IController => {
  return new RemoveSolutionController(makeRemoveSolutionService(), makeRemoveSolutionValidations())
}
