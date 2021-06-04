import { MostPopularProblemsController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeMostPopularProblemsService } from '../../services'
import { makeMostPopularProblemsValidations } from '../../validations'

export const makeMostPopularProblemsController = (): IController => {
  return new MostPopularProblemsController(makeMostPopularProblemsService(), makeMostPopularProblemsValidations())
}
