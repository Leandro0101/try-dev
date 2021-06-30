import { ICreateUserDTO, IReturnUserDTO } from '@data/dtos'
import { IUseCasesReturn } from '@data/protocols'

export interface IAddUserUseCase {
  execute: (userData: ICreateUserDTO) => Promise<IUseCasesReturn<IReturnUserDTO>>
}
