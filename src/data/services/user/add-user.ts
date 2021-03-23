import { ICreateUserDTO, IReturnUserDTO } from '@/src/data/dtos'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { IEncrypter } from '../../protocols/criptograpy/encrypter'
import { IAddUserRepository } from '../../repositories/'

export class AddUserService implements IAddUserUseCase {
  constructor (private readonly addUserRepository: IAddUserRepository,
    private readonly loadUserByEmailService: ILoadUserByEmailUseCase,
    private readonly encrypter: IEncrypter) {}

  async execute (userData: ICreateUserDTO): Promise<IReturnUserDTO> {
    const { name, email } = userData
    const userExists = await this.loadUserByEmailService.execute(email)

    if (userExists) {
      return null
    }

    const hashedPassword = await this.encrypter.encrypt(userData.password)
    const { id, createdAt, status } = await this.addUserRepository.execute({ name, email, password: hashedPassword })

    return { id, name, email, status, createdAt }
  }
}
