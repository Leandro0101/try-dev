import { ISolutionEntity, IUserEntity } from '@/src/domain/entities'
import { ICreateSolutionDTO } from '../../dtos'

export interface IAddSolutionToUserRepository {
  execute: (createSolutionData: ICreateSolutionDTO, user: IUserEntity) => Promise<ISolutionEntity>
}
