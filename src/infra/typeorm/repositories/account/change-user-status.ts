import { IUserStatus } from '@domain/entities'
import { IChangeUserStatusRepository } from '@data/repositories'
import { getConnection } from 'typeorm'
import { UserModel } from '../../models'

export class ChangeUserStatusRepository implements IChangeUserStatusRepository {
  async execute (newStatus: IUserStatus, userId: string): Promise<void> {
    await getConnection().createQueryBuilder().update(UserModel)
      .set({ status: newStatus })
      .where('id = :id', { id: userId })
      .execute()
  }
}
