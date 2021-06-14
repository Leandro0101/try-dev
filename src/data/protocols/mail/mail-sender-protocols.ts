export interface IMailDestination {
  name: string
  address: string
}

export interface IMailMessageBody {
  html?: string
  text?: string
}

export interface IMailMessage {
  subject: string
  body: IMailMessageBody
}

export interface IMailData {
  destination: IMailDestination
  message: IMailMessage
}
