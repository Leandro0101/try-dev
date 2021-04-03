import { IMarkProblemAsResolvedUseCase } from '@domain/usecases'
import { ILoadProblemByIdRepository, IMarkProblemAsResolvedRepository } from '../../repositories'

export class MarkProblemAsResolvedService implements IMarkProblemAsResolvedUseCase {
  constructor (
    private readonly markProblemAsResolvedRepository: IMarkProblemAsResolvedRepository,
    private readonly loadProblemByIdRepository: ILoadProblemByIdRepository
  ) {}

  async execute (problemId: string): Promise<void> {
    const problem = await this.loadProblemByIdRepository.execute(problemId)

    if (!problem) return null

    await this.markProblemAsResolvedRepository.execute(problem)
  }
}
