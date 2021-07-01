import { IUseCasesReturn } from '@data/protocols'
import { IStarEntity } from '../../entities'

export interface ILoadStarsByUserUseCase {
  execute: (userId: string, skip: number) => Promise<IUseCasesReturn<IStarEntity[]>>
}
