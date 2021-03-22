import { IProblemEntity, IUserEntity } from '@domain/entities'

export interface ICreateSolutionDTO {
  problem: IProblemEntity
  user: IUserEntity
  source_code: string
  description: string
}
