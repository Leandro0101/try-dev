import { ISolutionEntity } from '@domain/entities'

export interface IMostPopularSolutionsRepository {
  execute: (problemId: string, skip: number) => Promise<ISolutionEntity>
}
