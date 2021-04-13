import { IStarEntity } from '@domain/entities'
import { ILoadStarsFromUserRepository } from '@data/repositories'
import { BaseStarRepository } from '../base-star-repository'
import { getCustomRepository } from 'typeorm'

export class LoadStarsFromUserRepository implements ILoadStarsFromUserRepository {
  async execute (userId: string, solutionId?: string): Promise<IStarEntity | IStarEntity[]> {
    const baseRepository = getCustomRepository(BaseStarRepository)
    let response

    if (solutionId) {
      response = await baseRepository.find({
        where: { userId, solutionId }
      })
    } else {
      response = await baseRepository.find({
        where: { userId }
      })
    }

    return response
  }
}
