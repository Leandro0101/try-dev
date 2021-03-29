import { ISolutionEntity } from '../../domain/entities/solution'
import { IReturnUserDTO } from './return-user'

export interface IReturnSolutionDTO {
  solution: Omit<ISolutionEntity, 'user'>
  user: IReturnUserDTO
}
