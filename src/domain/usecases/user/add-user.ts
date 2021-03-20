import { ICreateUserDTO, IReturnUserDTO } from '../../../data/dtos'

export interface IAddUserUseCase {
  execute: (userData: ICreateUserDTO) => Promise<IReturnUserDTO>
}
