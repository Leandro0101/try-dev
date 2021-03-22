import { ISolutionEntity } from '@domain/entities'
import { ICreateSolutionDTO } from '../../dtos'

export interface IAddSolutionRepository {
  execute: (createSolutionData: ICreateSolutionDTO) => Promise<ISolutionEntity>
}
