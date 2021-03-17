import { ICreateUserDTO } from '@/src/domain/dtos'
import { IUserEntity } from '@/src/domain/entities'

export interface IAddUserRepository {
  execute: (userData: ICreateUserDTO) => Promise<IUserEntity>
}
