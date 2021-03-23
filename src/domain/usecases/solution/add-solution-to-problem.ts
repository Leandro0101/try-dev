import { ICreateSolutionDTO, IReturnSolutionDTO } from '@data/dtos'

export interface IAddSolutionToProblemUseCase {
  execute: (createSolutionData: ICreateSolutionDTO) => Promise<IReturnSolutionDTO>
}
