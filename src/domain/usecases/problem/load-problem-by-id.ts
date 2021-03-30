import { TReturnProblemDTO } from '@data/dtos'

export interface ILoadProblemByIdUseCase {
  execute: (problemId: string) => Promise<TReturnProblemDTO>
}
