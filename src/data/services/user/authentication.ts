import { IAuthData, IAuthenticationUseCase } from '@domain/usecases'
import {
  IFailValidations, IHashComparator,
  ITokenGenerator, IUseCasesReturn
} from '../../protocols'
import { ILoadUserByEmailRepository } from '../../repositories'

export class AuthenticationService implements IAuthenticationUseCase {
  constructor (
    private readonly loadUserByEmail: ILoadUserByEmailRepository,
    private readonly hashComparator: IHashComparator,
    private readonly tokenGenerator: ITokenGenerator,
    private readonly tokenTimeExpiration: number
  ) {

  }

  async execute (authData: IAuthData): Promise<IUseCasesReturn<string>> {
    const { email, password } = authData
    const user = await this.loadUserByEmail.execute(email)
    const failValidations: IFailValidations = {}
    if (user) {
      const isValid = await this.hashComparator.compare(password, user.password)
      if (isValid) {
        const token = await this.tokenGenerator.generate({
          userId: user.id, timeExpiration: this.tokenTimeExpiration
        })

        return { content: token }
      }
    }

    failValidations.invalidCredentials = true

    return { failValidations }
  }
}
