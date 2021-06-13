import { IEmailSender, IMailData } from '@data/protocols'
import SES from 'aws-sdk/clients/ses'

export class SESMailSenderAdapter implements IEmailSender {
  private readonly client: SES
  constructor () {
    this.client = new SES({ region: 'us-east-1' })
  }

  async execute (data: IMailData): Promise<void> {
    const { name, address } = data.destination
    const { body, subject } = data.message
    await this.client.sendEmail({
      Source: 'Trydev <no-reply@trydev.com.br>',
      Destination: {
        ToAddresses: [
          `${name} <${address}>`
        ]
      },
      Message: {
        Subject: {
          Data: subject
        },
        Body: {
          Text: {
            Data: body.text
          }
        }
      },
      ConfigurationSetName: 'trydev-handler'
    }).promise()
  }
}
