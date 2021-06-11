import { IAddStarUseCase } from '@domain/usecases'
import { AddStarService } from '@data/services'
import {
  IAddStarRepository, ILoadSolutionByIdRepository,
  ILoadStarFromUserRepository, ILoadUserByIdRepository
} from '@data/repositories'

import {
  AddStarRepository, LoadSolutionByIdRepository,
  LoadStarsFromUserRepository, LoadUserByIdRepository
} from '@infra/typeorm/repositories'

export const makeAddStarService = (): IAddStarUseCase => {
  const addStar: IAddStarRepository = new AddStarRepository()
  const loadSolutionById: ILoadSolutionByIdRepository = new LoadSolutionByIdRepository()
  const loadUserById: ILoadUserByIdRepository = new LoadUserByIdRepository()
  const loadStarFromUser: ILoadStarFromUserRepository = new LoadStarsFromUserRepository()
  return new AddStarService(addStar, loadSolutionById, loadUserById, loadStarFromUser)
}
