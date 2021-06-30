import { IUseCasesReturn } from '@data/protocols'

export type IConfirmationEmailData = {
  id: string
  email: string
  name: string
}

export interface ISendAccountVerificationEmailUseCase {
  execute: (data: IConfirmationEmailData) => Promise<IUseCasesReturn<void>>
}
