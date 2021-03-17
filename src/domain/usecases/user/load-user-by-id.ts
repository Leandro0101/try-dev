import { IUserEntity } from '@domain/entities'

export interface ILoadUserByIdUseCase {
  execute: (userId: string) => Promise<IUserEntity>
}
