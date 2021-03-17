import { ICreateUserDTO, IReturnUserDTO } from '@/src/domain/dtos'
import { IAddUserUseCase } from '@/src/domain/usecases/add-user'
import { IAddUserRepository } from '../repositories/add-user'

export class AddUserService implements IAddUserUseCase {
  constructor (private readonly addUserRepository: IAddUserRepository) {}

  async execute (userData: ICreateUserDTO): Promise<IReturnUserDTO> {
    return await this.addUserRepository.execute(userData)
  }
}
