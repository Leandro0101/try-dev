import { IProblemEntity } from '@domain/entities'

export interface IMostPopularProblemsRepository {
  execute: (skip: number) => Promise<IProblemEntity[]>
}
