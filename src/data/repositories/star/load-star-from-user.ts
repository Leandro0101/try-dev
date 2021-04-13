import { IStarEntity } from '@domain/entities'

export interface ILoadStarFromUserRepository {
  execute: (userId: string, solutionId: string) => Promise<IStarEntity>
}
