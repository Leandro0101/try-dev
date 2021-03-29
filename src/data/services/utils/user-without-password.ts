import { IUserEntity } from '@domain/entities'
import { IReturnUserDTO } from '../../dtos/return-user'

export const userWithoutPassword = (user: IUserEntity): IReturnUserDTO => {
  const { password, ...userWithoutPassword } = user

  return userWithoutPassword
}
