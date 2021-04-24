import { LoadProblemByIdRepository, MostPopularSolutionsRepository } from '@infra/typeorm/repositories'
import { ILoadProblemByIdRepository, IMostPopularSolutionsRepository } from '@data/repositories'
import { MostPopularSolutionsService } from '@data/services'
import { IMostPopularSolutionsUseCase } from '@domain/usecases'

export const makeMostPopularSolutionsService = (): IMostPopularSolutionsUseCase => {
  const loadProblemById: ILoadProblemByIdRepository = new LoadProblemByIdRepository()
  const mostPopularSolutions: IMostPopularSolutionsRepository = new MostPopularSolutionsRepository()
  return new MostPopularSolutionsService(mostPopularSolutions, loadProblemById)
}
