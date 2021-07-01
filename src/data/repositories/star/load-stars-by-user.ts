import { IStarEntity } from '@domain/entities'

export interface ILoadStarsByUserRepository {
  execute: (userId: string, skip: number) => Promise<IStarEntity[]>
}
