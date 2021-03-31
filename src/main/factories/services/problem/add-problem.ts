import { AddProblemRepository, LoadUserByIdRepository } from '@infra/typeorm/repositories'
import { AddProblemService } from '@data/services'
import { IAddProblemUseCase } from '@domain/usecases'
import { IAddProblemRepository } from '@data/repositories'

export const makeAddProblemService = (): IAddProblemUseCase => {
  const addProblemRepository: IAddProblemRepository = new AddProblemRepository()
  const addProblemService: IAddProblemUseCase = new AddProblemService(addProblemRepository,
    new LoadUserByIdRepository())

  return addProblemService
}
