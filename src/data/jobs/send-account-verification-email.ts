import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'

interface IQueueData {
  data: IConfirmationEmailData
  sendAccountVerificationEmail: ISendAccountVerificationEmailUseCase
}

export default {
  key: 'SendAccountVerificationEmail',
  async handle (queueData: IQueueData): Promise<void> {
    const { id, email, name } = queueData.data.user
    await queueData.sendAccountVerificationEmail.execute({
      user: { id, email, name },
      templatePath: queueData.data.templatePath
    })
  }
}
