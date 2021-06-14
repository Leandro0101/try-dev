import { IProblemEntity, ISolutionEntity, IStarEntity } from '.'

export enum IUserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending'
}

export interface IUserEntity {
  id: string
  name: string
  email: string
  password: string
  solutions: ISolutionEntity[]
  problems: IProblemEntity[]
  stars: IStarEntity[]
  status: IUserStatus
  createdAt: Date
}
