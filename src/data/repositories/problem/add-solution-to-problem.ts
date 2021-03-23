import { IProblemEntity, ISolutionEntity } from '@/src/domain/entities'
import { ICreateSolutionDTO } from '../../dtos'

export interface IAddSolutionToProblemRepository {
  execute: (createSolutionData: ICreateSolutionDTO, problem: IProblemEntity) => Promise<ISolutionEntity>
}
