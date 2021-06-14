import { IUserStatus } from '../../domain/entities'

export interface IReturnUserDTO {
  id: string
  name: string
  email: string
  status: IUserStatus
  createdAt: Date
}
