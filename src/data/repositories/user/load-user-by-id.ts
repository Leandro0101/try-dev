import { IUserEntity } from '@domain/entities'

export interface ILoadUserByIdRepository {
  execute: (userId: string) => Promise<IUserEntity | undefined>
}
