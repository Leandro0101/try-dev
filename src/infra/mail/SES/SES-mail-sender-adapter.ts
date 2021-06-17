import { IMailData, IMailSender } from '@data/protocols'
import SES from 'aws-sdk/clients/sesv2'

export class SESMailSenderAdapter implements IMailSender {
  private readonly client: SES
  constructor () {
    this.client = new SES({ region: 'us-east-1' })
  }

  async execute (data: IMailData): Promise<void> {
    const { addresses } = data.destination
    const { name, templateData } = data.template
    await this.client.sendEmail({
      FromEmailAddress: data.source,
      Destination: {
        ToAddresses: addresses
      },
      Content: {
        Template: {
          TemplateData: JSON.stringify(templateData),
          TemplateName: name
        }
      }
    }).promise()
  }
}
