import { IStarEntity, IUserEntity, IProblemEntity } from '.'

export interface ISolutionEntity {
  id: string
  sourceCode: string
  description: string
  user: IUserEntity
  stars: IStarEntity[]
  problem: IProblemEntity
  createdAt: Date
}
