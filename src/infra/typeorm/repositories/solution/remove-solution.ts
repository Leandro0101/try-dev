import { ISolutionEntity } from '@domain/entities'
import { IRemoveSolutionRepository } from '@data/repositories'
import { BaseSolutionRepository } from '../base-repositories/base-solution-repository'
import { getCustomRepository } from 'typeorm'

export class RemoveSolutionRepository implements IRemoveSolutionRepository {
  async execute (solution: ISolutionEntity): Promise<void> {
    const baseRepository = getCustomRepository(BaseSolutionRepository)

    await baseRepository.remove(solution)
  }
}
