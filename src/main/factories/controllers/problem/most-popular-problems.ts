import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { MostPopularProblemsController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeMostPopularProblemsService } from '../../services'
import { makeMostPopularProblemsValidations } from '../../validations'

export const makeMostPopularProblemsController = (): IController => {
  const controller = new MostPopularProblemsController(makeMostPopularProblemsService(), makeMostPopularProblemsValidations())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
