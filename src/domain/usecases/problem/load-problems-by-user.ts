import { IProblemEntity } from '@domain/entities'

export interface ILoadProblemsByUserUseCase {
  execute: (userId: string, skip: number) => Promise<IProblemEntity[]>
}
