import { IHashComparator, ITokenGenerator } from '@data/protocols'
import { LoadUserByEmailRepository } from '@infra/typeorm/repositories'
import { ILoadUserByEmailRepository } from '@data/repositories'
import { AuthenticationService } from '@data/services'
import { IAuthenticationUseCase } from '@domain/usecases'
import { BcryptAdapter } from '@infra/criptograpy/bcrypt-adapter'
import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'

export const makeAuthenticationService = (): IAuthenticationUseCase => {
  const loadUserByEmail: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  const hashComparator: IHashComparator = new BcryptAdapter()
  const tokenGenerator: ITokenGenerator = new JWTAdapter()

  return new AuthenticationService(loadUserByEmail, hashComparator, tokenGenerator)
}
