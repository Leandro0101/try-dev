import { IStarEntity, ISolutionEntity } from '@domain/entities'
import { IReturnUserDTO } from '.'

export type TReturnStarDTO = Omit<IStarEntity, 'user' | 'solution'> & {
  user: IReturnUserDTO } & { solution: Omit<ISolutionEntity, 'user'> }
