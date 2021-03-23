import { IReturnProblemAndUserModel } from '@data/dtos'

export interface ILoadOneProblemAndUserUseCase {
  execute: (userId: string, problemId: string) => Promise<IReturnProblemAndUserModel>
}
