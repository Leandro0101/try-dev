import { LoadUserByIdRepository } from '@infra/typeorm/repositories'
import { LoadUserByIdService } from '@data/services'
import { ILoadUserByIdUseCase } from '@domain/usecases'
import { ILoadUserByIdRepository } from '@data/repositories'

export const makeLoadUserByIdService = (): ILoadUserByIdUseCase => {
  const loadUserByIdRepository: ILoadUserByIdRepository = new LoadUserByIdRepository()
  const loadUserByIdService: ILoadUserByIdUseCase = new LoadUserByIdService(loadUserByIdRepository)

  return loadUserByIdService
}
