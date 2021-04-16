import { IProblemEntity } from '../../entities'

export interface IMostPopularProblemsUseCase {
  execute: (skip: number) => Promise<IProblemEntity[]>
}
