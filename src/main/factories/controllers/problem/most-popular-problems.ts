import { MostPopularProblemsController } from '@/src/presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeMostPopularProblemsService } from '../../services'

export const makeMostPopularProblemsController = (): IController => {
  return new MostPopularProblemsController(makeMostPopularProblemsService())
}
