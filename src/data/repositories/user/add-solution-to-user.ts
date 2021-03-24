import { ISolutionEntity, IUserEntity } from '@/src/domain/entities'

export interface IAddSolutionToUserRepository {
  execute: (solution: ISolutionEntity, user: IUserEntity) => Promise<void>
}
