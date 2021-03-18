import { AddUserRepository, LoadUserByEmailRepository } from '@infra/typeorm/repositories'
import { AddUserService, LoadUserByEmailService } from '@data/services'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { IAddUserRepository, ILoadUserByEmailRepository } from '@data/repositories'

export const makeAddUserService = (): IAddUserUseCase => {
  const addUserRepository: IAddUserRepository = new AddUserRepository()
  const loadUserByEmailRepository: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  const loadUserByEmailService: ILoadUserByEmailUseCase = new LoadUserByEmailService(loadUserByEmailRepository)
  const addUserService: IAddUserUseCase = new AddUserService(addUserRepository, loadUserByEmailService)

  return addUserService
}
