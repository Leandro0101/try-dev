import { ISolutionEntity } from '@domain/entities'

export interface ILoadSolutionsByProblemRepository {
  execute: (problemId: string, skip: number) => Promise<ISolutionEntity[]>
}
