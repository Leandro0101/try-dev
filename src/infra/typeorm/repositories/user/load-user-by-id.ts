import { ILoadUserByIdRepository } from '@data/repositories'
import { IUserEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseUserRepository } from '../base-user-repository'

export class LoadUserByIdRepository implements ILoadUserByIdRepository {
  async execute (userId: string): Promise<IUserEntity> {
    const baseRepository = getCustomRepository(BaseUserRepository)
    const foundUser = await baseRepository.findOne(userId)

    return foundUser
  }
}
