import { ProblemModel } from '@infra/typeorm/models'
import { IEditProblemRepository } from '@data/repositories'
import { IProblemEntity } from '@domain/entities'
import { getConnection } from 'typeorm'

export class EditProblemRepository implements IEditProblemRepository {
  async execute (problem: IProblemEntity): Promise<IProblemEntity> {
    const { title, description } = problem
    await getConnection().createQueryBuilder().update(ProblemModel)
      .set({ title, description })
      .where('id = :id', { id: problem.id })
      .execute()

    return problem
  }
}
