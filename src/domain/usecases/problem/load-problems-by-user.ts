import { IUseCasesReturn } from '@data/protocols'
import { IProblemEntity } from '@domain/entities'

export interface ILoadProblemsByUserUseCase {
  execute: (userId: string, skip: number) => Promise<IUseCasesReturn<IProblemEntity[]>>
}
