import { IUseCasesReturn } from '@data/protocols'

export interface ISendPasswordResetEmailUseCase {
  execute: (email: string) => Promise<IUseCasesReturn<void>>
}
