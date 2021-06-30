import { IEditSolutionRepository } from '@data/repositories'
import { ISolutionEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseSolutionRepository } from '../base-repositories/base-solution-repository'

export class EditSolutionRepository implements IEditSolutionRepository {
  async execute (solution: ISolutionEntity): Promise<ISolutionEntity> {
    const baseRepository = getCustomRepository(BaseSolutionRepository)

    await baseRepository.save(solution)

    return solution
  }
}
