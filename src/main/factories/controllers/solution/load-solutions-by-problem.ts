import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { LoadSolutionsByProblemController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadSolutionsByProblemService } from '../../services'
import { makeMostPopularSolutionsValidations } from '../../validations'

export const makeLoadSolutionsByProblemController = (): IController => {
  const controller = new LoadSolutionsByProblemController(makeLoadSolutionsByProblemService(), makeMostPopularSolutionsValidations())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
