import { IUserEntity } from '@domain/entities'

export interface ILoadUserByIdUseCase {
  execute: (userId: string) => Promise<Omit<IUserEntity, 'password'>>
}
