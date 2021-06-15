import { IMailSender, ITemplateGenerate, ITokenData, ITokenGenerator } from '@data/protocols'
import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { HandleBarsAdapter } from '@infra/mail/handle-bars-adapter'
import { SendAccountVerificationEmailService } from '@data/services'
import { ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { SESMailSenderAdapter } from '@infra/mail/SES/SES-mail-sender-adapter'
import { LoadUserByIdRepository } from '@infra/typeorm/repositories'

export const makeSendAccountVerificationEmailService = (): ISendAccountVerificationEmailUseCase => {
  const tokenGenerator: ITokenGenerator = new JWTAdapter()
  const templateGenerate: ITemplateGenerate = new HandleBarsAdapter()
  const mailSender: IMailSender = new SESMailSenderAdapter()
  const fiveMinutes = 60 * 5
  const tokenData: Omit<ITokenData, 'userId'> = {
    key: process.env.EMAIL_CONFIRMATION_TOKEN_KEY,
    expiration: fiveMinutes
  }
  const service = new SendAccountVerificationEmailService(
    tokenGenerator,
    templateGenerate,
    mailSender,
    tokenData,
    new LoadUserByIdRepository()
  )
  return service
}
