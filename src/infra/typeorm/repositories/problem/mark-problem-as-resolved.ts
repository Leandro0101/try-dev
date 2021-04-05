import { IProblemEntity, IStatusProblem } from '@domain/entities'
import { IMarkProblemAsResolvedRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'

export class MarkProblemAsResolvedRepository implements IMarkProblemAsResolvedRepository {
  async execute (problem: IProblemEntity): Promise<void> {
    const baseRepository = getCustomRepository(BaseProblemRepository)
    problem.status = IStatusProblem.RESOLVED
    await baseRepository.save(problem)
  }
}
