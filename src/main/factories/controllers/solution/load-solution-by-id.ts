import { IController } from '@presentation/protocols'
import { LoadSolutionByIdController } from '@presentation/controllers'
import { makeLoadSolutionByIdService } from '../../services'
import { makeLoadSolutionByIdValidation } from '../validations'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'

export const makeLoadSolutionByIdController = (): IController => {
  const loadSolutionByIdController = new LoadSolutionByIdController(
    makeLoadSolutionByIdService(), makeLoadSolutionByIdValidation())

  return new LogControllerDecorator(loadSolutionByIdController, new AddLogErrorRepository())
}
