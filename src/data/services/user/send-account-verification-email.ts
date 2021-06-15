import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { IMailSender, ITemplateGenerate, ITokenData, ITokenGenerator } from '../../protocols'

export class SendAccountVerificationEmailService implements ISendAccountVerificationEmailUseCase {
  constructor (
    private readonly tokenGenerator: ITokenGenerator,
    private readonly templateGenerate: ITemplateGenerate,
    private readonly mailSender: IMailSender,
    private readonly tokenData: Omit<ITokenData, 'userId'>
  ) {}

  async execute (data: IConfirmationEmailData): Promise<void> {
    const { name, email, id } = data.user
    const tokenDataWithUserId = Object.assign(this.tokenData, { userId: id })
    const token = await this.tokenGenerator.generate(tokenDataWithUserId)
    const html = await this.templateGenerate.execute({
      path: data.templatePath,
      variables: { name, token }
    })
    await this.mailSender.execute({
      destination: {
        address: email, name
      },
      message: {
        body: {
          html
        },
        subject: 'Confirmação de e-mail'
      }
    })
  }
}
