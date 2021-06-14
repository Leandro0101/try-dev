interface IUserData {
  id: string
  email: string
  name: string
}

export interface IConfirmationEmailData {
  user: IUserData
  templatePath: string
}

export interface ISendAccountVerificationEmailUseCase {
  execute: (data: IConfirmationEmailData) => Promise<void>
}
