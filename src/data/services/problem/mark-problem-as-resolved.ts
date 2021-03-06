import { ILoadProblemByIdRepository, IMarkProblemAsResolvedRepository } from '../../repositories'
import { IMarkProblemAsResolvedUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { IStatusProblem } from '@domain/entities'

export class MarkProblemAsResolvedService implements IMarkProblemAsResolvedUseCase {
  constructor (
    private readonly markProblemAsResolvedRepository: IMarkProblemAsResolvedRepository,
    private readonly loadProblemByIdRepository: ILoadProblemByIdRepository
  ) {}

  async execute (problemId: string, userId: string): Promise<IUseCasesReturn<void>> {
    const problem = await this.loadProblemByIdRepository.execute(problemId)
    const failValidations: IFailValidations = {}
    if (!problem) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    if (userId !== problem.user.id) {
      failValidations.withoutPermission = true
      return { failValidations }
    }

    if (problem.status === IStatusProblem.RESOLVED) return { }

    await this.markProblemAsResolvedRepository.execute(problem)
    return { }
  }
}
