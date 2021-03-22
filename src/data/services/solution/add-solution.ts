import { IAddSolutionUseCase } from '@domain/usecases/'
import { ICreateSolutionDTO, IReturnSolutionDTO } from '../../dtos'
import { IAddSolutionRepository } from '../../repositories'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (private readonly addSolutionRepository: IAddSolutionRepository) {}
  async execute (createSolutionData: ICreateSolutionDTO): Promise<IReturnSolutionDTO> {
    const createdSolution = await this.addSolutionRepository.execute(createSolutionData)
    const { user, problem, ...solution } = createdSolution

    return { solution }
  }
}
