import { IProblemEntity } from '../../domain/entities'
import { IReturnUserDTO } from './return-user'

export interface IReturnProblemDTO {
  problem: Omit<IProblemEntity, 'user'>
  user: IReturnUserDTO
}
