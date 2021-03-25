import { ILoadSolutionByIdRepository } from '@data/repositories'
import { ISolutionEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseSolutionRepository } from '../base-solution-repository'

export class LoadSolutionByIdRepository implements ILoadSolutionByIdRepository {
  async execute (id: string): Promise<ISolutionEntity> {
    const baseRepository = getCustomRepository(BaseSolutionRepository)
    const solution: ISolutionEntity = await baseRepository.findOne(id)

    return solution
  }
}
