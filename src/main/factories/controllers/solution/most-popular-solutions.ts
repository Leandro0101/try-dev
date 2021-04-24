import { MostPopularSolutionsController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeMostPopularSolutionsService } from '../../services'
import { makeMostPopularSolutionsValidations } from '../validations'

export const makeMostPopularSolutionsController = (): IController => {
  return new MostPopularSolutionsController(makeMostPopularSolutionsService(), makeMostPopularSolutionsValidations())
}
