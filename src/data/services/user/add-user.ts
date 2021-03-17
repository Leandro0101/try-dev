import { ICreateUserDTO, IReturnUserDTO } from '@domain/dtos'
import { IAddUserUseCase } from '@domain/usecases'
import { IAddUserRepository } from '../../repositories/'

export class AddUserService implements IAddUserUseCase {
  constructor (private readonly addUserRepository: IAddUserRepository) {}

  async execute (userData: ICreateUserDTO): Promise<IReturnUserDTO> {
    return await this.addUserRepository.execute(userData)
  }
}
