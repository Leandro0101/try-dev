import { ICreateSolutionDTO } from '@data/dtos'
import { ISolutionEntity } from '@domain/entities'
import { IAddSolutionRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseSolutionRepository } from '../base-solution-repository'
import { SolutionModel } from '@/src/data/models'

export class AddSolutionRepository implements IAddSolutionRepository {
  async execute (createSolutionData: ICreateSolutionDTO): Promise<ISolutionEntity> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { user, problem, source_code, description } = createSolutionData
    const solution = new SolutionModel({ source_code, description, user, problem })
    const baseRepository = getCustomRepository(BaseSolutionRepository)
    const createdSolution = await baseRepository.save(solution)

    return createdSolution
  }
}
