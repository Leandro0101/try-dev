import { LoadSolutionsByProblemController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadSolutionsByProblemService } from '../../services'
import { makeMostPopularSolutionsValidations } from '../../validations'

export const makeLoadSolutionsByProblemController = (): IController => {
  return new LoadSolutionsByProblemController(makeLoadSolutionsByProblemService(), makeMostPopularSolutionsValidations())
}
