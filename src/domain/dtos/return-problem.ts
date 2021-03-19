import { IReturnUserDTO } from '.'
import { IProblemEntity } from '../entities'

export interface IReturnProblemDTO {
  problem: Omit<IProblemEntity, 'user'>
  user: IReturnUserDTO
}
