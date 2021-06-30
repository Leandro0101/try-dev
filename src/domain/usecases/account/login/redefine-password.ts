import { IUseCasesReturn } from '@data/protocols'

export interface IRedefinePasswordUseCase {
  execute: (token: string, password: string) => Promise<IUseCasesReturn<string>>
}
