import { ILoadUserByEmailRepository } from '@data/repositories'
import { IUserEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseUserRepository } from '../base-repositories/base-user-repository'

export class LoadUserByEmailRepository implements ILoadUserByEmailRepository {
  async execute (email: string): Promise<IUserEntity> {
    const baseRepository = getCustomRepository(BaseUserRepository)
    const foundUser = await baseRepository.find({ where: { email }, select: ['password', 'id'] })

    return foundUser[0]
  }
}
