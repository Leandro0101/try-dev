import { IStarEntity } from '@domain/entities'
import { ILoadStarFromUserRepository } from '@data/repositories'
import { BaseStarRepository } from '../base-repositories/base-star-repository'
import { getCustomRepository } from 'typeorm'

export class LoadStarsFromUserRepository implements ILoadStarFromUserRepository {
  async execute (userId: string, solutionId: string): Promise<IStarEntity> {
    const baseRepository = getCustomRepository(BaseStarRepository)

    const response = await baseRepository.find({
      where: { user: userId, solution: solutionId }
    })

    return response[0]
  }
}
