import { IUseCasesReturn } from '@data/protocols'
import { TReturnSolutionDTO } from '@data/dtos'

export interface ILoadSolutionByIdUseCase {
  execute: (id: string) => Promise<IUseCasesReturn<TReturnSolutionDTO>>
}
