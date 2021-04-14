import { IProblemEntity } from '@domain/entities'

export interface IEditProblemRepository {
  execute: (solution: IProblemEntity) => Promise<IProblemEntity>
}
