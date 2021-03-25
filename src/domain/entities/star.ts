import { ISolutionEntity, IUserEntity } from '.'

export interface IStarEntity {
  id: string
  value: number
  user: IUserEntity
  solution: ISolutionEntity
  createdAt: Date
}
