import { ILoadUserByIdRepository } from '@data/repositories'
import { IUserEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseUserRepository } from '../base-user-repository'

export class LoadUserByIdRepository implements ILoadUserByIdRepository {
  async execute (id: string): Promise<IUserEntity> {
    const baseRepository = getCustomRepository(BaseUserRepository)
    const foundUser = await baseRepository.find({ where: { id }, relations: ['problems', 'stars', 'solutions'] })

    return foundUser[0]
  }
}
