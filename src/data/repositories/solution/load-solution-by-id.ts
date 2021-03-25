import { ISolutionEntity } from '@domain/entities'

export interface ILoadSolutionByIdRepository {
  execute: (id: string) => Promise<ISolutionEntity>
}
