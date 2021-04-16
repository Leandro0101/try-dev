import { IProblemEntity } from '../../entities'

export interface IMostPopularProblemsUseCase {
  execute: (skip: number, year: number) => Promise<IProblemEntity[]>
}
