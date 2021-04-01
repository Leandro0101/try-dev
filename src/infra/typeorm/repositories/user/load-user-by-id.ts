import { ILoadUserByIdRepository } from '@data/repositories'
import { IUserEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'
import { BaseSolutionRepository } from '../base-solution-repository'
import { BaseStarRepository } from '../base-star-repository'
import { BaseUserRepository } from '../base-user-repository'

export class LoadUserByIdRepository implements ILoadUserByIdRepository {
  async execute (id: string): Promise<IUserEntity> {
    const baseUserRepository = getCustomRepository(BaseUserRepository)
    const baseSolutionRepository = getCustomRepository(BaseSolutionRepository)
    const baseProblemRepository = getCustomRepository(BaseProblemRepository)
    const baseStarRepository = getCustomRepository(BaseStarRepository)

    const take = 15
    const foundUser = await baseUserRepository.findOne(id)

    if (!foundUser) return null

    const stars = await baseStarRepository.find({ where: { user: id }, take })
    const problems = await baseProblemRepository.find({ where: { user: id }, take })
    const solutions = await baseSolutionRepository.find({ where: { user: id }, take })

    foundUser.solutions = solutions
    foundUser.problems = problems
    foundUser.stars = stars

    return foundUser
  }
}
