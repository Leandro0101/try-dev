import { IRemoveSolutionUseCase } from '@domain/usecases'
import { ILoadSolutionByIdRepository, IRemoveSolutionRepository } from '../../repositories'

export class RemoveSolutionService implements IRemoveSolutionUseCase {
  constructor (
    private readonly removeSolutionRepository: IRemoveSolutionRepository,
    private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository
  ) {}

  async execute (solutionId: string): Promise<void> {
    const solution = await this.loadSolutionByIdRepository.execute(solutionId)

    if (!solution) return null

    await this.removeSolutionRepository.execute(solution)
  }
}
