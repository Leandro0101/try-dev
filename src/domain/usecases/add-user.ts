import { ICreateUserDTO, IReturnUserDTO } from '../dtos'

export interface IAddUserUseCase {
  execute: (userData: ICreateUserDTO) => Promise<IReturnUserDTO>
}
