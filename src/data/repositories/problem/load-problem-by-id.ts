import { IProblemEntity } from '@domain/entities'

export interface ILoadProblemByIdRepository {
  execute: (problemId: string) => Promise<IProblemEntity>
}
