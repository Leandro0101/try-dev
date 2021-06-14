import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { VerifyEmailService } from '@data/services/user/verify-email'
import { IVerifyEmailUseCase } from '@domain/usecases'

export const makeVerifyEmailService = (): IVerifyEmailUseCase => {
  return new VerifyEmailService(new JWTAdapter())
}
