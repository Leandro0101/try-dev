import { IUserEntity } from '@domain/entities'

export interface ILoadUserByEmailRepository {
  execute: (email: string) => Promise<IUserEntity | undefined>
}
