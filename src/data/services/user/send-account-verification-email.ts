import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { IMailSender, ITemplateGenerate, ITokenGenerator } from '../../protocols'

export class SendAccountVerificationEmailService implements ISendAccountVerificationEmailUseCase {
  constructor (
    private readonly tokenGenerator: ITokenGenerator,
    private readonly templateGenerate: ITemplateGenerate,
    private readonly mailSender: IMailSender
  ) {}

  async execute (data: IConfirmationEmailData): Promise<void> {
    const { name, email, id } = data.user

    const token = await this.tokenGenerator.generate(id)
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
