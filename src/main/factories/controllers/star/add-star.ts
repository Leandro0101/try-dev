import { IController } from '@presentation/protocols'
import { AddStarController } from '@presentation/controllers'
import { makeAddStarService } from '../../services'
import { makeAddStarValidation } from '../../validations'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'

export const makeAddStarController = (): IController => {
  const addStarController = new AddStarController(
    makeAddStarService(), makeAddStarValidation())

  return new LogControllerDecorator(addStarController, new AddLogErrorRepository())
}
