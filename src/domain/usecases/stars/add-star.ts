import { IUseCasesReturn } from '@data/protocols/use-case-return'
import { TReturnStarDTO } from '@data/dtos'

export interface ICreateStarModel {
  userId: string
  solutionId: string
  value: number
}

export interface IAddStarUseCase {
  execute: (createStarData: ICreateStarModel) => Promise<IUseCasesReturn<TReturnStarDTO>>
}
