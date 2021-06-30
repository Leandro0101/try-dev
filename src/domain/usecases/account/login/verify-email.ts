import { IUseCasesReturn } from '@data/protocols'

export interface IVerifyEmailUseCase {
  execute: (token: string) => Promise<IUseCasesReturn<string>>
}
