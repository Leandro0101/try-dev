import { IProblemEntity, IUserEntity } from '@domain/entities'

export interface IReturnProblemAndUserModel {
  problem: IProblemEntity
  user: IUserEntity
}
