import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { IFailValidations, IMailData, IMailSender, ITokenData, ITokenGenerator, IUseCasesReturn } from '../../protocols'
import { ILoadUserByIdRepository } from '../../repositories'

export class SendAccountVerificationEmailService implements ISendAccountVerificationEmailUseCase {
  constructor (
    private readonly tokenGenerator: ITokenGenerator,
    private readonly mailSender: IMailSender,
    private readonly tokenData: Omit<ITokenData, 'userId'>,
    private readonly loadUserById: ILoadUserByIdRepository,
    private readonly templateName?: string
  ) {}

  async execute (data: IConfirmationEmailData): Promise<IUseCasesReturn<void>> {
    const { email, id } = data.user
    const user = await this.loadUserById.execute(id)
    const failValidations: IFailValidations = {}
    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }
    const tokenDataWithUserId = Object.assign(this.tokenData, { userId: id })
    const token = await this.tokenGenerator.generate(tokenDataWithUserId)
    const emailData: IMailData = {
      destination: { addresses: [email] },
      source: 'Trydev <no-reply@trydev.com.br>',
      template: { name: this.templateName, templateData: { token } }
    }
    await this.mailSender.execute(emailData)

    return { }
  }
}
