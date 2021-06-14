import { IUserStatus } from '@domain/entities'

export interface IChangeUserStatusRepository {
  execute: (newStatus: IUserStatus, userId: string) => Promise<void>
}
