import { IProblemEntity } from '@domain/entities'

export interface IMostPopularProblemsRepository {
  execute: (skip: number, year: number) => Promise<IProblemEntity[]>
}
