import {
  LoadUserByIdRepository, LoadProblemByIdRepository, AddSolutionRepository
} from '@infra/typeorm/repositories'

import {
  AddSolutionService, LoadOneProblemAndUserService, LoadProblemByIdService,
  LoadUserByIdService
} from '@data/services'

import {
  IAddSolutionUseCase, ILoadOneProblemAndUserUseCase, ILoadProblemByIdUseCase,
  ILoadUserByIdUseCase
} from '@domain/usecases'

import {
  IAddSolutionRepository, ILoadProblemByIdRepository, ILoadUserByIdRepository
} from '@data/repositories'

export const makeAddSolutionService = (): IAddSolutionUseCase => {
  const loadUserByIdRepository: ILoadUserByIdRepository = new LoadUserByIdRepository()
  const loadUserByIdService: ILoadUserByIdUseCase = new LoadUserByIdService(loadUserByIdRepository)
  const loadProblemByIdRepository: ILoadProblemByIdRepository = new LoadProblemByIdRepository()
  const loadProblemByIdService: ILoadProblemByIdUseCase = new LoadProblemByIdService(loadProblemByIdRepository)
  const loadOneProblemAndUserService: ILoadOneProblemAndUserUseCase = new LoadOneProblemAndUserService(
    loadUserByIdService, loadProblemByIdService
  )

  const addSolutionRepository: IAddSolutionRepository = new AddSolutionRepository()

  const addSolutionService: IAddSolutionUseCase = new AddSolutionService(
    loadOneProblemAndUserService, addSolutionRepository
  )

  return addSolutionService
}
