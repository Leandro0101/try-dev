import { IUseCasesReturn } from '@data/protocols'

export interface IMarkProblemAsResolvedUseCase {
  execute: (problemId: string) => Promise<IUseCasesReturn<void>>
}
