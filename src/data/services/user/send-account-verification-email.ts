import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { IFailValidations, IMailSender, ITemplateGenerate, ITokenData, ITokenGenerator, IUseCasesReturn } from '../../protocols'
import { ILoadUserByIdRepository } from '../../repositories'

export class SendAccountVerificationEmailService implements ISendAccountVerificationEmailUseCase {
  constructor (
    private readonly tokenGenerator: ITokenGenerator,
    private readonly templateGenerate: ITemplateGenerate,
    private readonly mailSender: IMailSender,
    private readonly tokenData: Omit<ITokenData, 'userId'>,
    private readonly loadUserById: ILoadUserByIdRepository
  ) {}

  async execute (data: IConfirmationEmailData): Promise<IUseCasesReturn<void>> {
    const { name, email, id } = data.user
    const user = await this.loadUserById.execute(id)
    const failValidations: IFailValidations = {}
    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }
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

    return { }
  }
}
