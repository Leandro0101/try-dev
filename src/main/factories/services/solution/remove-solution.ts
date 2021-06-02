import { LoadProblemByIdRepository, LoadSolutionByIdRepository, RemoveSolutionRepository } from '@infra/typeorm/repositories'
import { RemoveSolutionService } from '@data/services'
import { IRemoveSolutionUseCase } from '@domain/usecases'

export const makeRemoveSolutionService = (): IRemoveSolutionUseCase => {
  return new RemoveSolutionService(new RemoveSolutionRepository(), new LoadSolutionByIdRepository(), new LoadProblemByIdRepository())
}
