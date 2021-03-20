import { IUserEntity } from '../../domain/entities'

export interface ICreateProblemDTO {
  user: IUserEntity
  title: string
  description: string
}
