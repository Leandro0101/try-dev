import { LogControllerDecorator } from '../../../decorators/log'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { AddSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAddSolutionService } from '../../services'
import { makeAddSolutionValidations } from '../../validations'

export const makeAddSolutionController = (): IController => {
  const addSolutionController = new AddSolutionController(
    makeAddSolutionService(), makeAddSolutionValidations())

  return new LogControllerDecorator(addSolutionController, new AddLogErrorRepository())
}
