import { IReturnProblemDTO } from '../../dtos'

export interface ILoadOneProblemByUserRepository {
  execute: (userId: string, problemId: string) => Promise<IReturnProblemDTO>
}
