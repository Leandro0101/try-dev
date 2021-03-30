import { IAddSolutionUseCase } from '@domain/usecases'
import {
  IAddSolutionRepository, ILoadProblemByIdRepository,
  ILoadUserByIdRepository
} from '@data/repositories'

import {
  AddSolutionRepository, LoadProblemByIdRepository,
  LoadUserByIdRepository
} from '@infra/typeorm/repositories'

import { AddSolutionService } from '@data/services'

export const makeAddSolutionService = (): IAddSolutionUseCase => {
  const loadUserByIdRepository: ILoadUserByIdRepository = new LoadUserByIdRepository()
  const loadProblemByIdRepository: ILoadProblemByIdRepository = new LoadProblemByIdRepository()
  const addSolutionRepository: IAddSolutionRepository = new AddSolutionRepository()
  const addSolutionService: IAddSolutionUseCase = new AddSolutionService(
    loadUserByIdRepository, loadProblemByIdRepository, addSolutionRepository)

  return addSolutionService
}
