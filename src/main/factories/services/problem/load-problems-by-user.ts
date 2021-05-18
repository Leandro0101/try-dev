import { LoadProblemsByUserService } from '@data/services'
import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { LoadProblemsByUserRepository, LoadUserByIdRepository } from '@infra/typeorm/repositories'

export const makeLoadProblemsByUserService = (): ILoadProblemsByUserUseCase => {
  const loadProblemsByUserRepository = new LoadProblemsByUserRepository()
  const loadUserByIdRepository = new LoadUserByIdRepository()
  return new LoadProblemsByUserService(loadProblemsByUserRepository, loadUserByIdRepository)
}
