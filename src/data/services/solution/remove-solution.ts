import { ILoadProblemByIdRepository, ILoadSolutionByIdRepository, IRemoveSolutionRepository } from '../../repositories'
import { IRemoveSolutionUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'

export class RemoveSolutionService implements IRemoveSolutionUseCase {
  constructor (
    private readonly removeSolution: IRemoveSolutionRepository,
    private readonly loadSolutionById: ILoadSolutionByIdRepository,
    private readonly loadProblemById: ILoadProblemByIdRepository
  ) {}

  async execute (solutionId: string, currentUserId: string): Promise<IUseCasesReturn<void>> {
    const solution = await this.loadSolutionById.execute(solutionId)
    const failValidations: IFailValidations = {}
    if (!solution) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    const problem = await this.loadProblemById.execute(solution.problem.id)
    if (solution.user.id === currentUserId || problem.user.id === currentUserId) {
      await this.removeSolution.execute(solution)
      return { }
    }

    failValidations.withoutPermission = true
    return { failValidations }
  }
}
