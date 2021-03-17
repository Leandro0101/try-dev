import { ICreateUserDTO, IReturnUserDTO } from '@domain/dtos'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { IAddUserRepository } from '../../repositories/'

export class AddUserService implements IAddUserUseCase {
  constructor (private readonly addUserRepository: IAddUserRepository, private readonly loadUserByEmailService: ILoadUserByEmailUseCase) {}

  async execute (userData: ICreateUserDTO): Promise<IReturnUserDTO> {
    const userExists = await this.loadUserByEmailService.execute(userData.email)

    if (userExists) {
      throw new Error('User already exists')
    }

    return await this.addUserRepository.execute(userData)
  }
}
