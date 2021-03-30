import { TReturnStarDTO } from '@data/dtos'

export interface ICreateStarModel {
  solutionId: string
  value: number
}

export interface IAddStarUseCase {
  execute: (createStarData: ICreateStarModel) => Promise<TReturnStarDTO>
}
