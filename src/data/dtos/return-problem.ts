import { IReturnUserDTO } from '.'
import { IProblemEntity } from '../../domain/entities'

export interface IReturnProblemDTO {
  problem: Omit<IProblemEntity, 'user'>
  user: IReturnUserDTO
}
