import { IReturnProblemDTO, IReturnUserDTO } from '.'

export interface IReturnProblemByUser {
  user: IReturnUserDTO
  problem: IReturnProblemDTO
}
