import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { LoadStarsByUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadStarsByUserService } from '../../services'
import { makeLoadStarsByUserValidation } from '../../validations'

export const makeLoadStarsByUserController = (): IController => {
  const controller = new LoadStarsByUserController(makeLoadStarsByUserService(), makeLoadStarsByUserValidation())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
