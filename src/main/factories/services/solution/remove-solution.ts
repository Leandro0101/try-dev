import { ILoadSolutionByIdRepository, IRemoveSolutionRepository } from '@data/repositories'
import { LoadSolutionByIdRepository, RemoveSolutionRepository } from '@infra/typeorm/repositories'
import { RemoveSolutionService } from '@data/services'
import { IRemoveSolutionUseCase } from '@domain/usecases'

export const makeRemoveSolutionService = (): IRemoveSolutionUseCase => {
  const removeSolutionRepository: IRemoveSolutionRepository = new RemoveSolutionRepository()
  const loadSolutionByIdRepository: ILoadSolutionByIdRepository = new LoadSolutionByIdRepository()

  return new RemoveSolutionService(removeSolutionRepository, loadSolutionByIdRepository)
}
