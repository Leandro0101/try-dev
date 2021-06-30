import { ICreateUserDTO } from '@data/dtos'
import { IUserEntity } from '@domain/entities'

export interface IAddUserRepository {
  execute: (userData: ICreateUserDTO) => Promise<IUserEntity>
}
