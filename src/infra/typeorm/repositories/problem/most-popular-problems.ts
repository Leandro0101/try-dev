import { IProblemEntity } from '@domain/entities'
import { IMostPopularProblemsRepository } from '@data/repositories'
import { IParamsToLoading } from '@domain/usecases'
import { getManager } from 'typeorm'

export class MostPopularProblemsRepository implements IMostPopularProblemsRepository {
  readonly take = 15
  private readonly queryStart = `
    SELECT p."userId", COUNT(p.id) AS solutionsQuantity, p.id, p.title, p.description, p."createdAt"
    FROM problems p INNER JOIN solutions s ON (p.id=s."problemId")`

  async withYearGreaterOrEqualThan (value: number, skip: number): Promise<IProblemEntity[]> {
    const problems = await getManager().query(
      `${this.queryStart} WHERE EXTRACT( year FROM s."createdAt") >= ${value}
      GROUP BY (p.id) ORDER BY (solutionsQuantity) DESC 
      OFFSET ${this.take * (skip - 1)} LIMIT ${this.take}`
    )

    return problems
  }

  async withYearLessOrEqualThan (value: number, skip: number): Promise<IProblemEntity[]> {
    const problems = await getManager().query(
      `${this.queryStart} WHERE EXTRACT( year FROM s."createdAt") <= ${value}
      GROUP BY (p.id) ORDER BY (solutionsQuantity) DESC 
      OFFSET ${this.take * (skip - 1)} LIMIT ${this.take}`
    )
    return problems
  }

  async withYearIntervalBetween (paramsToLoading: IParamsToLoading): Promise<IProblemEntity[]> {
    const { intervalInit, intervalFinal, skip } = paramsToLoading

    const problems = await getManager().query(
      `${this.queryStart} WHERE extract( year from s."createdAt" )>=${intervalInit} 
      AND ${intervalFinal} <= extract( year from s."createdAt")
      GROUP BY (p.id)  ORDER BY (solutionsQuantity) DESC
      OFFSET ${this.take}*${skip - 1} LIMIT ${this.take}`
    )

    return problems
  }
}
