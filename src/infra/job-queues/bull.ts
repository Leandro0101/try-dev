/* eslint-disable @typescript-eslint/no-floating-promises */
import { IConfirmationEmailData, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import { IQueueSystem } from '@data/job-queues/protocols/queue-system'
import Bull from 'bull'
import { makeSendAccountVerificationEmailService } from '@/src/main/factories/services'
export const sendAccountEmailVerificationQueue = new Bull('sendAccountEmailVerificationQueue', {
  redis: {
    host: 'redis',
    port: 6379
  }
})
export interface IQueueData {
  confirmationEmailData: IConfirmationEmailData
  sendAccountVerificationEmail: ISendAccountVerificationEmailUseCase
}

class BullAdapter implements IQueueSystem {
  async process (): Promise<void> {
    sendAccountEmailVerificationQueue.process(async job => {
      const { confirmationEmailData } = job.data as IQueueData
      const { email, id, name } = confirmationEmailData.user
      await makeSendAccountVerificationEmailService().execute({
        user: { email, id, name },
        templatePath: ''
      })
    })
  }

  async add <T>(data: T): Promise<void> {
    sendAccountEmailVerificationQueue.add(data)
  }
}

export const queueSystem = new BullAdapter()
