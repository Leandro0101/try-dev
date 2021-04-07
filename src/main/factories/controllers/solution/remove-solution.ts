import { IController } from '@presentation/protocols'
import { RemoveSolutionController } from '@presentation/controllers'
import { makeRemoveSolutionService } from '../../services'
import { makeRemoveSolutionValidations } from '../validations'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'

export const makeRemoveSolutionController = (): IController => {
  const removeSolutionController = new RemoveSolutionController(
    makeRemoveSolutionService(), makeRemoveSolutionValidations())

  return new LogControllerDecorator(removeSolutionController, new AddLogErrorRepository())
}
