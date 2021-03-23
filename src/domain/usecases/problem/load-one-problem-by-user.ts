import { IReturnProblemByUser } from '@data/dtos'

export interface ILoadOneProblemByUserUseCase {
  execute: (userId: string, problemId: string) => Promise<IReturnProblemByUser>
}
