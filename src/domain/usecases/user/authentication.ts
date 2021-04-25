import { IUseCasesReturn } from '@data/protocols'

export interface IAuthData {
  email: string
  password: string
}

export interface IAuthenticationUseCase {
  execute: (authData: IAuthData) => Promise<IUseCasesReturn<string>>
}
