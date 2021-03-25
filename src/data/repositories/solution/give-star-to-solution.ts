import { ISolutionEntity } from '@domain/entities'

export interface IGiveStarToSolutionRepository {
  execute: (solution: ISolutionEntity) => Promise<void>
}
