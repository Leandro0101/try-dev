import { ICreateUserDTO, IReturnUserDTO } from '@domain/dtos'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { IAddUserRepository } from '../../repositories/'

export class AddUserService implements IAddUserUseCase {
  constructor (private readonly addUserRepository: IAddUserRepository, private readonly loadUserByEmailService: ILoadUserByEmailUseCase) {}

  async execute (userData: ICreateUserDTO): Promise<IReturnUserDTO> {
    const { name, email } = userData
    const userExists = await this.loadUserByEmailService.execute(email)

    if (userExists) {
      return null
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id, created_at } = await this.addUserRepository.execute(userData)
    return { id, name, email, created_at }
  }
}
