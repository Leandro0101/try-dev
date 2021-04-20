import { IProblemEntity } from '@domain/entities'
import { IMostPopularProblemsRepository } from '@data/repositories'
import { getConnection } from 'typeorm'
import { IParamsToLoading } from '@/src/domain/usecases'

export class MostPopularProblemsRepository implements IMostPopularProblemsRepository {
  async execute (paramsToLoading: IParamsToLoading): Promise<IProblemEntity[]> {
    const { intervalInit, intervalFinal, skip } = paramsToLoading
    const connection = getConnection()
    const queryRunner = connection.createQueryRunner()
    const take = 15
    const problems = await queryRunner.query(
      // eslint-disable-next-line @typescript-eslint/quotes
      `SELECT  
      COUNT(p.id) AS solutionsQuantity, p.id, p.title, p.description, p."createdAt"
      FROM problems p
      INNER JOIN solutions s 
      ON (p.id=s."problemId") 
      WHERE extract( year from s."createdAt" )>=${intervalInit} AND
      extract( year from s."createdAt")<=${intervalFinal}
      GROUP BY (p.id) 
      ORDER BY (solutionsQuantity) DESC
      OFFSET ${take}*${skip - 1}
      LIMIT ${take}`
    )

    return problems
  }
}
