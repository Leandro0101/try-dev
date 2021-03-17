import { IUserEntity } from '../entities'

export interface ICreateProblemDTO {
  user: IUserEntity
  title: string
  description: string
}
