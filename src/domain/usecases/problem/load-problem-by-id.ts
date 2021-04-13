import { IUseCasesReturn } from '@data/protocols'
import { TReturnProblemDTO } from '@data/dtos'

export interface ILoadProblemByIdUseCase {
  execute: (problemId: string) => Promise<IUseCasesReturn<TReturnProblemDTO>>
}
