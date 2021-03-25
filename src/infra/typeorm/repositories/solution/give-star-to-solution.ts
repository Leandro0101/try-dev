import { IGiveStarToSolutionRepository } from '@data/repositories'
import { ISolutionEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseSolutionRepository } from '../base-solution-repository'

export class GiveStarToSolutionRepository implements IGiveStarToSolutionRepository {
  async execute (solution: ISolutionEntity): Promise<void> {
    solution.stars += 1
    const baseRepository = getCustomRepository(BaseSolutionRepository)
    await baseRepository.save(solution)
  }
}
