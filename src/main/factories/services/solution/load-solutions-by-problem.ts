import { LoadProblemByIdRepository, LoadSolutionsByProblemRepository } from '@infra/typeorm/repositories'
import { ILoadProblemByIdRepository, ILoadSolutionsByProblemRepository } from '@data/repositories'
import { LoadSolutionsByProblemService } from '@data/services'
import { ILoadSolutionsByProblemUseCase } from '@domain/usecases'

export const makeLoadSolutionsByProblemService = (): ILoadSolutionsByProblemUseCase => {
  const loadProblemById: ILoadProblemByIdRepository = new LoadProblemByIdRepository()
  const mostPopularSolutions: ILoadSolutionsByProblemRepository = new LoadSolutionsByProblemRepository()
  return new LoadSolutionsByProblemService(mostPopularSolutions, loadProblemById)
}
