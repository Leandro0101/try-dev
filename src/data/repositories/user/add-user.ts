import { ICreateUserDTO } from '@domain/dtos'
import { IUserEntity } from '@domain/entities'

export interface IAddUserRepository {
  execute: (userData: ICreateUserDTO) => Promise<IUserEntity>
}
