import { IUseCasesReturn } from '@data/protocols'

export interface IMarkProblemAsResolvedUseCase {
  execute: (problemId: string, userId: string) => Promise<IUseCasesReturn<void>>
}
