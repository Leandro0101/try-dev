import { IStarEntity } from '@domain/entities'
import { IReturnUserDTO } from '.'

export type TReturnStarDTO = Omit<IStarEntity, 'user'> & {
  user: IReturnUserDTO
}
