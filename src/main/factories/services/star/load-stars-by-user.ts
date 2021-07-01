import { LoadStarsByUserRepository, LoadUserByIdRepository } from '@infra/typeorm/repositories'
import { LoadStarsByUserService } from '@data/services'
import { ILoadStarsByUserUseCase } from '@domain/usecases'

export const makeLoadStarsByUserService = (): ILoadStarsByUserUseCase => {
  const loadStarsByUser = new LoadStarsByUserRepository()
  const loadUserById = new LoadUserByIdRepository()
  return new LoadStarsByUserService(loadStarsByUser, loadUserById)
}
