import { LoadProblemsByUserService } from '@data/services'
import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { ILoadProblemsByUserRepository } from '@data/repositories'
import { LoadProblemsByUserRepository } from '@infra/typeorm/repositories'

export const makeLoadProblemsByUserService = (): ILoadProblemsByUserUseCase => {
  const loadProblemsByUserRepository: ILoadProblemsByUserRepository = new LoadProblemsByUserRepository()

  return new LoadProblemsByUserService(loadProblemsByUserRepository)
}
