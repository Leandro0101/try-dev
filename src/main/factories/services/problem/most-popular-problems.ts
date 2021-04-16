import { IMostPopularProblemsRepository } from '@data/repositories'
import { MostPopularProblemsRepository } from '@infra/typeorm/repositories'
import { MostPopularProblemsService } from '@data/services'
import { IMostPopularProblemsUseCase } from '@domain/usecases'

export const makeMostPopularProblemsService = (): IMostPopularProblemsUseCase => {
  const mostPopularProblems: IMostPopularProblemsRepository = new MostPopularProblemsRepository()

  return new MostPopularProblemsService(mostPopularProblems)
}
