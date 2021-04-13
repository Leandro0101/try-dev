import { IUseCasesReturn } from '@data/protocols'

export interface IRemoveSolutionUseCase {
  execute: (solutionId: string) => Promise<IUseCasesReturn<void>>
}
