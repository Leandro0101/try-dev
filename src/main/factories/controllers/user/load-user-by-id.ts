import { LogControllerDecorator } from '../../../decorators/log'
import { LoadUserByIdController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadUserByIdService } from '../../services'
import { makeLoadUserByIdValidation } from '../validations'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'

export const makeLoadUserByIdController = (): IController => {
  const loadUserByIdController = new LoadUserByIdController(
    makeLoadUserByIdService(), makeLoadUserByIdValidation())

  return new LogControllerDecorator(loadUserByIdController, new AddLogErrorRepository())
}
