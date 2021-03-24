import { IProblemEntity, ISolutionEntity } from '@/src/domain/entities'

export interface IAddSolutionToProblemRepository {
  execute: (solution: ISolutionEntity, problem: IProblemEntity) => Promise<void>
}
