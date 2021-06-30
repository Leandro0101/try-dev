import { IChangeUserPasswordRepository } from '@data/repositories'
import { getConnection } from 'typeorm'
import { UserModel } from '../../models'

export class ChangeUserPasswordRepository implements IChangeUserPasswordRepository {
  async execute (newPassword: string, email: string): Promise<void> {
    await getConnection().createQueryBuilder().update(UserModel)
      .set({ password: newPassword })
      .where('email = :email', { email })
      .execute()
  }
}
