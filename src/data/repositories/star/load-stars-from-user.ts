import { IStarEntity } from '@domain/entities'

export interface ILoadStarsFromUserRepository {
  execute: (userId: string, solutionId?: string) => Promise<IStarEntity[] | IStarEntity>
}
