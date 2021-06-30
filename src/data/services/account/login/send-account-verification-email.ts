import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { IFailValidations, IMailData, IMailSender, ITokenData, ITokenGenerator, IUseCasesReturn } from '../../../protocols'
import { ILoadUserByIdRepository } from '../../../repositories'

type TTemplateVariables = {
  templateName?: string
  tokenData: Omit<ITokenData, 'userId'>
}

export class SendAccountVerificationEmailService implements ISendAccountVerificationEmailUseCase {
  constructor (
    private readonly tokenGenerator: ITokenGenerator,
    private readonly mailSender: IMailSender,
    private readonly loadUserById: ILoadUserByIdRepository,
    private readonly templateVariables: TTemplateVariables
  ) { }

  async execute (data: IConfirmationEmailData): Promise<IUseCasesReturn<void>> {
    const { email, id } = data
    const { tokenData, templateName } = this.templateVariables
    const user = await this.loadUserById.execute(id)
    const failValidations: IFailValidations = {}
    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }
    const tokenDataWithUserId = Object.assign(tokenData, { userId: id })
    const token = await this.tokenGenerator.generate(tokenDataWithUserId)
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
