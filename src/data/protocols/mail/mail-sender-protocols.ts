export interface IMailDestination {
  name?: string
  addresses: string[]
}

export interface IMailMessageBody {
  html?: string
  text?: string
}

export interface IMailMessage {
  subject?: string
  body?: IMailMessageBody
}

export interface ITemplate {
  name: string
  templateData: Object | string
}

export interface IMailData {
  source: string
  destination: IMailDestination
  message?: IMailMessage
  template?: ITemplate
}
