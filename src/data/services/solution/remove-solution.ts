import { ILoadSolutionByIdRepository, IRemoveSolutionRepository } from '../../repositories'
import { IRemoveSolutionUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'

export class RemoveSolutionService implements IRemoveSolutionUseCase {
  constructor (
    private readonly removeSolutionRepository: IRemoveSolutionRepository,
    private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository
  ) {}

  async execute (solutionId: string): Promise<IUseCasesReturn<void>> {
    const solution = await this.loadSolutionByIdRepository.execute(solutionId)

    const failValidations: IFailValidations = {}
    if (!solution) {
      failValidations.solutionNotFound = true
      return { failValidations }
    }

    await this.removeSolutionRepository.execute(solution)

    return { }
  }
}
