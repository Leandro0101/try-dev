import { ISolutionEntity, IUserEntity } from '@domain/entities'

export interface ICreateStarDTO {
  user: IUserEntity
  solution: ISolutionEntity
  value: number
}
