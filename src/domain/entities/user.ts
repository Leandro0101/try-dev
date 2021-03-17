import { IProblemEntity, ISolutionEntity } from '.'

export interface IUserEntity {
  id: string
  name: string
  email: string
  password: string
  solutions: ISolutionEntity[]
  problems: IProblemEntity[]
  created_at: Date
}
