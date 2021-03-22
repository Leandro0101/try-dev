import { ICreateSolutionDTO, IReturnSolutionDTO } from '@data/dtos'

export interface IAddSolutionUseCase {
  execute: (createSolutionData: ICreateSolutionDTO) => Promise<IReturnSolutionDTO>
}
