import { ISolutionEntity } from '@domain/entities'

export interface IRemoveSolutionRepository {
  execute: (solution: ISolutionEntity) => Promise<void>
}
