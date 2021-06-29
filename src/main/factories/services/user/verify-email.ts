import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { VerifyEmailService } from '@data/services/user/verify-email'
import { IVerifyEmailUseCase } from '@domain/usecases'
import { ChangeUserStatusRepository, LoadUserByIdRepository } from '@infra/typeorm/repositories'

export const makeVerifyEmailService = (): IVerifyEmailUseCase => {
  return new VerifyEmailService(new JWTAdapter(), new LoadUserByIdRepository(), new ChangeUserStatusRepository(), process.env.EMAIL_CONFIRMATION_TOKEN_KEY)
}
