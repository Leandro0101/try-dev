import { LoadProblemByIdRepository } from '@infra/typeorm/repositories'
import { ILoadProblemByIdRepository } from '@data/repositories'
import { LoadProblemByIdService } from '@data/services'
import { ILoadProblemByIdUseCase } from '@domain/usecases'

export const makeLoadProblemByIdService = (): ILoadProblemByIdUseCase => {
  const loadProblemByIdRepository: ILoadProblemByIdRepository = new LoadProblemByIdRepository()

  return new LoadProblemByIdService(loadProblemByIdRepository)
}
