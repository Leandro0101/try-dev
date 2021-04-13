import { ILoadProblemByIdRepository, IMarkProblemAsResolvedRepository } from '../../repositories'
import { IMarkProblemAsResolvedUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'

export class MarkProblemAsResolvedService implements IMarkProblemAsResolvedUseCase {
  constructor (
    private readonly markProblemAsResolvedRepository: IMarkProblemAsResolvedRepository,
    private readonly loadProblemByIdRepository: ILoadProblemByIdRepository
  ) {}

  async execute (problemId: string): Promise<IUseCasesReturn<void>> {
    const problem = await this.loadProblemByIdRepository.execute(problemId)
    const failValidations: IFailValidations = {}
    if (!problem) {
      failValidations.problemNotFound = true
      return { failValidations }
    }

    await this.markProblemAsResolvedRepository.execute(problem)
    return { }
  }
}
