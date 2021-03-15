import { ISolutionEntity } from './solution'

export interface IUserEntity {
  id: string
  name: string
  email: string
  password: string
  solutions: ISolutionEntity[]
  created_at: Date
}
