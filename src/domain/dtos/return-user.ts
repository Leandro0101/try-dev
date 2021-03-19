import { IStatusUser } from '../entities'

export interface IReturnUserDTO {
  id: string
  name: string
  email: string
  status: IStatusUser
  created_at: Date
}
