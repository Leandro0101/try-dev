import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'
import { LoadProblemsByUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadProblemsByUserService } from '../../services'
import { makeLoadProblemsByUserValidations } from '../validations'

export const makeLoadProblemsByUserController = (): IController => {
  const loadProblemsByUserController = new LoadProblemsByUserController(
    makeLoadProblemsByUserService(),
    makeLoadProblemsByUserValidations()
  )

  return new LogControllerDecorator(loadProblemsByUserController, new AddLogErrorRepository())
}
