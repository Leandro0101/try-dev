import { IProblemEntity, ISolutionEntity } from '.'

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
  status: IStatusUser
  created_at: Date
}
