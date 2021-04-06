import { ISolutionEntity } from '@domain/entities'

export interface IEditSolutionRepository {
  execute: (solution: ISolutionEntity) => Promise<ISolutionEntity>
}
