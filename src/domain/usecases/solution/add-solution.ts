import { TReturnSolutionDTO } from '@data/dtos'
export interface ICreateSolutionModel {
  userId: string
  problemId: string
  sourceCode: string
  description: string
}

export interface IAddSolutionUseCase {
  execute: (createSolutionData: ICreateSolutionModel) => Promise<TReturnSolutionDTO>
}
