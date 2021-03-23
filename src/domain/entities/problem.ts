import { ISolutionEntity } from './solution'
import { IUserEntity } from './user'

export enum IStatusProblem {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  RESOLVED = 'resolved'
}

export interface IProblemEntity {
  id: string
  title: string
  description: string
  solutions: ISolutionEntity[]
  user: IUserEntity
  status: IStatusProblem
  createdAt: Date
}
