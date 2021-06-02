import { IProblemEntity, IStatusProblem } from '@domain/entities'
import { IMarkProblemAsResolvedRepository } from '@data/repositories'
import { getConnection } from 'typeorm'
import { ProblemModel } from '@data/models'

export class MarkProblemAsResolvedRepository implements IMarkProblemAsResolvedRepository {
  async execute (problem: IProblemEntity): Promise<void> {
    await getConnection().createQueryBuilder().update(ProblemModel)
      .set({ status: IStatusProblem.RESOLVED })
      .where('id = :id', { id: problem.id })
      .execute()
  }
}
