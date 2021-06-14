import { IMailSender, ITemplateGenerate, ITokenGenerator } from '@data/protocols'
import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { HandleBarsAdapter } from '@infra/mail/handle-bars-adapter'
import { SendAccountVerificationEmailService } from '@data/services'
import { ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { SESMailSenderAdapter } from '@infra/mail/SES/SES-mail-sender-adapter'

export const makeSendAccountVerificationEmailService = (): ISendAccountVerificationEmailUseCase => {
  const tokenGenerator: ITokenGenerator = new JWTAdapter()
  const templateGenerate: ITemplateGenerate = new HandleBarsAdapter()
  const mailSender: IMailSender = new SESMailSenderAdapter()
  return new SendAccountVerificationEmailService(tokenGenerator, templateGenerate, mailSender)
}
