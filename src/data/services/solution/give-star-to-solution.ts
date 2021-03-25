import { ISolutionEntity } from '@domain/entities'
import { IGiveStarToSolutionUseCase } from '@domain/usecases'
import { IGiveStarToSolutionRepository, ILoadSolutionByIdRepository } from '../../repositories'

export class GiveStarToSolutionService implements IGiveStarToSolutionUseCase {
  constructor (private readonly giveStarToSolutionRepository: IGiveStarToSolutionRepository,
    private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository) {}

  async execute (solutionId: string): Promise<void> {
    const solution: ISolutionEntity = await this.loadSolutionByIdRepository.execute(solutionId)

    if (!solution) return null

    await this.giveStarToSolutionRepository.execute(solution)
  }
}
