/* eslint-disable @typescript-eslint/quotes */
import { ILoadSolutionsByProblemRepository } from '@data/repositories'
import { ISolutionEntity } from '@domain/entities'
import { getManager } from 'typeorm'
export class LoadSolutionsByProblemRepository implements ILoadSolutionsByProblemRepository {
  async execute (problemId: string, skip: number): Promise<ISolutionEntity[]> {
    const take = 15
    const solutions = await getManager().query(`
      SELECT s.id, s.description, s."sourceCode", 
      CAST ( AVG (st.value) AS NUMERIC( 10,2 ) ) as average, 
      COUNT ( st.id ) AS "starsQuantity", s."createdAt"
      FROM solutions s LEFT OUTER JOIN stars st ON (s.id = st."solutionId") 
      WHERE s."problemId"='${problemId}'
      GROUP BY (s.id) ORDER BY ("starsQuantity") DESC
      OFFSET ${take * (skip - 1)} LIMIT ${take}
    `)

    return solutions
  }
}
