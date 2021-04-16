import { IProblemEntity } from '@domain/entities'
import { IMostPopularProblemsRepository } from '@data/repositories'
import { getConnection } from 'typeorm'

export class MostPopularProblemsRepository implements IMostPopularProblemsRepository {
  async execute (skip: number): Promise<IProblemEntity[]> {
    const connection = getConnection()
    const queryRunner = connection.createQueryRunner()
    const problems = await queryRunner.query(
      // eslint-disable-next-line @typescript-eslint/quotes
      `SELECT COUNT(p.id) as solutionsQuantity, p.id, p.title, p.description, p."createdAt"
      FROM problems p
      INNER JOIN solutions s 
      ON (p.id=s."problemId") 
      GROUP BY (p.id) 
      ORDER BY (solutionsQuantity)`
    )
    return problems
  }
}
