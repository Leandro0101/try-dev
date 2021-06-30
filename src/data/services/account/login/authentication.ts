import { IAuthData, IAuthenticationUseCase } from '@domain/usecases'
import {
  IFailValidations, IHashComparator,
  ITokenGenerator, IUseCasesReturn, ITokenData
} from '../../../protocols'
import { ILoadUserByEmailRepository } from '../../../repositories'

export class AuthenticationService implements IAuthenticationUseCase {
  constructor (
    private readonly loadUserByEmail: ILoadUserByEmailRepository,
    private readonly hashComparator: IHashComparator,
    private readonly tokenGenerator: ITokenGenerator,
    private readonly tokenData: Omit<ITokenData, 'userId'>
  ) {

  }

  async execute (authData: IAuthData): Promise<IUseCasesReturn<string>> {
    const { email, password } = authData
    const user = await this.loadUserByEmail.execute(email)
    const failValidations: IFailValidations = {}
    if (user) {
      const isValid = await this.hashComparator.compare(password, user.password)
      if (isValid) {
        const tokenDataWithUserId = Object.assign(this.tokenData, { userId: user.id })
        const token = await this.tokenGenerator.generate(tokenDataWithUserId)
        return { content: token }
      }
    }

    failValidations.invalidCredentials = true

    return { failValidations }
  }
}
