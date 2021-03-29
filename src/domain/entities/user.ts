import { IProblemEntity, ISolutionEntity, IStarEntity } from '.'

export enum IStatusUser {
  ACTIVE = 'active', INACTIVE = 'inactive',
}

export interface IUserEntity {
  id: string
  name: string
  email: string
  password: string
  solutions: ISolutionEntity[]
  problems: IProblemEntity[]
  stars: IStarEntity[]
  status: IStatusUser
  createdAt: Date
}
