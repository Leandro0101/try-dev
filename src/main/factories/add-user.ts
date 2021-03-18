import { AddUserRepository, LoadUserByEmailRepository } from '@infra/repositories'
import { IAddUserRepository, ILoadUserByEmailRepository } from '@data/repositories'
import { AddUserService, LoadUserByEmailService } from '@data/services'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { AddUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'

export const makeAddUserController = (): IController => {
  const addUserRepository: IAddUserRepository = new AddUserRepository()
  const loadUserByEmailRepository: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  const loadUserByEmailService: ILoadUserByEmailUseCase = new LoadUserByEmailService(loadUserByEmailRepository)
  const addUserService: IAddUserUseCase = new AddUserService(addUserRepository, loadUserByEmailService)
  const addUserController: IController = new AddUserController(addUserService)

  return addUserController
}
