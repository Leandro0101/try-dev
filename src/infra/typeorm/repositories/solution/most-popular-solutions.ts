/* eslint-disable @typescript-eslint/quotes */
import { IMostPopularSolutionsRepository } from '@data/repositories'
import { ISolutionEntity } from '@domain/entities'
import { getQueryRunner } from '../../helpers/typeorm'

export class MostPopularSolutionsRepository implements IMostPopularSolutionsRepository {
  async execute (problemId: string, skip: number): Promise<ISolutionEntity> {
    const take = 15
    const solutions = await getQueryRunner().query(`
      SELECT s.id, s.description, s."sourceCode", 
      CAST ( AVG (st.value) AS NUMERIC( 10,2 ) ) as average, 
      COUNT ( st.id ) AS "starsQuantity", s."createdAt"
      FROM solutions s INNER JOIN stars st ON (s.id = st."solutionId") 
      WHERE s."problemId"='${problemId}'
      GROUP BY (s.id) ORDER BY ("starsQuantity") DESC
      OFFSET ${take * (skip - 1)} LIMIT ${take}
    `)

    return solutions
  }
}
