import { ISendPasswordResetEmailUseCase } from '@domain/usecases'
import { IFailValidations, IMailData, IMailSender, ITokenData, ITokenGenerator, IUseCasesReturn } from '../../protocols'
import { ILoadUserByEmailRepository } from '../../repositories'

type TTemplateVariables = {
  templateName?: string
  tokenData: Omit<ITokenData, 'userId'>
}

export class SendPasswordResetEmailService implements ISendPasswordResetEmailUseCase {
  constructor (
    private readonly tokenGenerator: ITokenGenerator,
    private readonly mailSender: IMailSender,
    private readonly loadUserByEmail: ILoadUserByEmailRepository,
    private readonly templateVariables: TTemplateVariables
  ) { }

  async execute (email: string): Promise<IUseCasesReturn<void>> {
    const { tokenData, templateName } = this.templateVariables
    const user = await this.loadUserByEmail.execute(email)
    const failValidations: IFailValidations = { }
    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }
    const tokenDataWithUserEmail = Object.assign(tokenData, { userEmail: email })
    const token = await this.tokenGenerator.generate(tokenDataWithUserEmail)
    const emailData: IMailData = {
      destination: { addresses: [email] },
      source: 'Trydev <no-reply@trydev.com.br>',
      template: {
        name: templateName,
        templateData: { token, timeExpiration: tokenData.expiration / 60 }
      }
    }

    await this.mailSender.execute(emailData)

    return { }
  }
}
