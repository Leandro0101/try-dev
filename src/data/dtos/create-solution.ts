import { IProblemEntity, IUserEntity } from '@domain/entities'

export interface ICreateSolutionDTO {
  user: IUserEntity
  problem: IProblemEntity
  description: string
  sourceCode: string
}
