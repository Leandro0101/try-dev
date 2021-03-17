import { IUserEntity } from '@domain/entities'

export interface ILoadUserByEmailUseCase {
  execute: (email: string) => Promise<IUserEntity | Error>
}
