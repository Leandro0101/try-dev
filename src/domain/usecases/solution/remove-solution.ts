import { IUseCasesReturn } from '@data/protocols'

export interface IRemoveSolutionUseCase {
  execute: (solutionId: string, currentUserId: string) => Promise<IUseCasesReturn<void>>
}
