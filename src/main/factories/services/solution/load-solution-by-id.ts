import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { LoadSolutionByIdService } from '@data/services'
import { ILoadSolutionByIdRepository } from '@data/repositories'
import { LoadSolutionByIdRepository } from '@infra/typeorm/repositories'
export const makeLoadSolutionByIdService = (): ILoadSolutionByIdUseCase => {
  const loadSolutionByIdRepository: ILoadSolutionByIdRepository = new LoadSolutionByIdRepository()

  return new LoadSolutionByIdService(loadSolutionByIdRepository)
}
