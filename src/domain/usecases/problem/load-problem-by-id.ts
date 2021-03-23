import { IProblemEntity } from '../../entities'

export interface ILoadProblemByIdUseCase {
  execute: (problemId: string) => Promise<IProblemEntity>
}
