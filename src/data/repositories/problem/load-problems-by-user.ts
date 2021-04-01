import { IProblemEntity } from '@domain/entities'

export interface ILoadProblemsByUserRepository {
  execute: (userId: string, skip: number) => Promise<IProblemEntity[]>
}
