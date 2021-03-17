import { UserModel } from '@/src/data/models/user'
import { IAddUserRepository } from '@/src/data/repositories/add-user'
import { ICreateUserDTO } from '@/src/domain/dtos'
import { IUserEntity } from '@/src/domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseUserRepository } from './base-user-repository'

export class AddUserRepository implements IAddUserRepository {
  async execute (userData: ICreateUserDTO): Promise<IUserEntity> {
    const { email, name, password } = userData
    const user = new UserModel({ email, name, password })

    const baseRepository = getCustomRepository(BaseUserRepository)
    const createdUser = await baseRepository.save(user)

    return createdUser
  }
}
