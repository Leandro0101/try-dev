import { IUseCasesReturn, IEncrypter, IFailValidations } from '../../../protocols'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { ICreateUserDTO, IReturnUserDTO } from '@data/dtos'
import { IAddUserRepository } from '../../../repositories'

export class AddUserService implements IAddUserUseCase {
  constructor (
    private readonly addUserRepository: IAddUserRepository,
    private readonly loadUserByEmailService: ILoadUserByEmailUseCase,
    private readonly encrypter: IEncrypter) {}

  async execute (userData: ICreateUserDTO): Promise<IUseCasesReturn<IReturnUserDTO>> {
    const { name, email } = userData
    const userExists = await this.loadUserByEmailService.execute(email)
    const failValidations: IFailValidations = {}

    if (userExists) {
      failValidations.emailAlreadyRegister = true
      return { failValidations }
    }

    const hashedPassword = await this.encrypter.encrypt(userData.password)
    const { id, createdAt, status } = await this.addUserRepository.execute({
      name, email, password: hashedPassword
    })
    const createdUser = { id, name, email, status, createdAt }

    return { content: createdUser }
  }
}
