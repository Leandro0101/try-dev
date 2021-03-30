import { ISolutionEntity } from '../../domain/entities/solution'
import { IReturnUserDTO } from './return-user'

export type TReturnSolutionDTO = Omit<ISolutionEntity, 'user'> & {
  user: IReturnUserDTO
}
