import { ICreateSolutionDTO } from '@data/dtos'
import { ISolutionEntity } from '@domain/entities'
import { IAddSolutionRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseSolutionRepository } from '../base-solution-repository'
import { SolutionModel } from '@data/models'

export class AddSolutionRepository implements IAddSolutionRepository {
  async execute (createSolutionData: ICreateSolutionDTO): Promise<ISolutionEntity> {
    const { sourceCode, description } = createSolutionData
    const solution = new SolutionModel({ sourceCode, description })
    const baseRepository = getCustomRepository(BaseSolutionRepository)
    const createdSolution = await baseRepository.save(solution)

    return createdSolution
  }
}
