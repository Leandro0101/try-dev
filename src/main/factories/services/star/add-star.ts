import { IAddStarUseCase } from '@domain/usecases'
import { AddStarService } from '@data/services'
import { IAddStarRepository, ILoadSolutionByIdRepository } from '@data/repositories'
import { AddStarRepository, LoadSolutionByIdRepository } from '@infra/typeorm/repositories'

export const makeAddStarService = (): IAddStarUseCase => {
  const addStarRepository: IAddStarRepository = new AddStarRepository()
  const loadSolutionById: ILoadSolutionByIdRepository = new LoadSolutionByIdRepository()

  return new AddStarService(addStarRepository, loadSolutionById)
}
