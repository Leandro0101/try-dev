import { IStarEntity } from '@domain/entities'
import { ILoadStarsByUserRepository } from '@data/repositories'
import { BaseStarRepository } from '../base-repositories/base-star-repository'
import { getCustomRepository } from 'typeorm'

export class LoadStarsByUserRepository implements ILoadStarsByUserRepository {
  async execute (userId: string, skip: number): Promise<IStarEntity[]> {
    const baseRepository = getCustomRepository(BaseStarRepository)
    const take = 15
    const response = await baseRepository.find({
      where: { user: userId },
      skip: (skip - 1) * take,
      take
    })

    return response
  }
}
