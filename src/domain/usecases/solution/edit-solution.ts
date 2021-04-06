import { ISolutionEntity } from '../../entities'

export interface IEditSolutionModel {
  description: string
  sourceCode: string
  solutionId: string
}

export interface IEditSolutionUseCase {
  execute: (editSolutionData: IEditSolutionModel) => Promise<ISolutionEntity>
}
