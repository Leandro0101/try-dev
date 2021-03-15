import { ISolutionEntity } from './solution'
import { IUserEntity } from './user'

export interface IProblemEntity {
  id: string
  title: string
  description: string
  solutions: ISolutionEntity[]
  user: IUserEntity
  created_at: Date
}
