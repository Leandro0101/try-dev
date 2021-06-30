import { IMailSender, ITokenData, ITokenGenerator } from '@data/protocols'
import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { SendPasswordResetEmailService } from '@data/services'
import { SESMailSenderAdapter } from '@infra/mail/SES/SES-mail-sender-adapter'
import { ISendPasswordResetEmailUseCase } from '@domain/usecases'
import { LoadUserByEmailRepository } from '@infra/typeorm/repositories'

export const makeSendPasswordResetEmailService = (): ISendPasswordResetEmailUseCase => {
  const tokenGenerator: ITokenGenerator = new JWTAdapter()
  const mailSender: IMailSender = new SESMailSenderAdapter()
  const fiveMinutes = 60 * 5
  const tokenData: Omit<ITokenData, 'userId'> = {
    key: process.env.REDEFINE_PASSWORD_TOKEN_KEY,
    expiration: fiveMinutes
  }
  const service = new SendPasswordResetEmailService(
    tokenGenerator,
    mailSender,
    new LoadUserByEmailRepository(),
    { tokenData, templateName: 'password-reset' }
  )
  return service
}
