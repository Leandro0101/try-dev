import { BcryptAdapter } from '@infra/criptograpy/bcrypt-adapter'
import { ChangeUserPasswordRepository } from '@infra/typeorm/repositories'
import { RedefinePasswordService } from '@data/services'
import { IRedefinePasswordUseCase } from '@domain/usecases'
import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'

export const makeRedefinePasswordService = (): IRedefinePasswordUseCase => {
  const jwt = new JWTAdapter()
  const key = process.env.REDEFINE_PASSWORD_TOKEN_KEY
  const repository = new ChangeUserPasswordRepository()
  const bcrypt = new BcryptAdapter(10)
  return new RedefinePasswordService(jwt, key, repository, bcrypt)
}
