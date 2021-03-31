import { IStarEntity } from '@domain/entities'

export type TReturnStarDTO = Omit<IStarEntity, 'user' | 'solution'>
