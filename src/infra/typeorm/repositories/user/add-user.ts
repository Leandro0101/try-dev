import { UserModel } from '@data/models'
import { IAddUserRepository } from '@data/repositories'
import { ICreateUserDTO } from '@domain/dtos'
import { IUserEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseUserRepository } from '../base-user-repository'

export class AddUserRepository implements IAddUserRepository {
  async execute (userData: ICreateUserDTO): Promise<IUserEntity> {
    const user = new UserModel(userData)
    const baseRepository = getCustomRepository(BaseUserRepository)
    const createdUser = await baseRepository.save(user)
    return createdUser
  }
}
