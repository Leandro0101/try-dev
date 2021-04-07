import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'
import { LoadProblemByIdController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadProblemByIdService } from '../../services'
import { makeLoadProblemByIdValidations } from '../validations'

export const makeLoadProblemByIdController = (): IController => {
  const loadProblemByIdController = new LoadProblemByIdController(
    makeLoadProblemByIdService(), makeLoadProblemByIdValidations())

  return new LogControllerDecorator(loadProblemByIdController, new AddLogErrorRepository())
}
