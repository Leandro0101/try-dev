import { IMailData } from './mail-sender-protocols'

export interface IMailSender {
  execute: (data: IMailData) => Promise<void>
}
