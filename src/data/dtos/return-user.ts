import { IStatusUser } from '../../domain/entities'

export interface IReturnUserDTO {
  id: string
  name: string
  email: string
  status: IStatusUser
  createdAt: Date
}
