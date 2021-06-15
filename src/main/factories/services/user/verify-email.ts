import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { VerifyEmailService } from '@data/services/user/verify-email'
import { IVerifyEmailUseCase } from '@domain/usecases'
import { ChangeUserStatusRepository, LoadUserByIdRepository } from '@infra/typeorm/repositories'

export const makeVerifyEmailService = (): IVerifyEmailUseCase => {
  return new VerifyEmailService(new JWTAdapter(), new LoadUserByIdRepository(), new ChangeUserStatusRepository(), '$2b$10$nCrht.uuF34i.M7hIRP8wuL.htt')
}
