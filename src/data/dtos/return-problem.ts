import { IProblemEntity } from '../../domain/entities'
import { IReturnUserDTO } from './return-user'

export type TReturnProblemDTO = Omit<IProblemEntity, 'user'> & {
  user: IReturnUserDTO
}
