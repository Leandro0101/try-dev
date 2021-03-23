import { IProblemEntity } from './problem'
import { IUserEntity } from './user'

export interface ISolutionEntity {
  id: string
  sourceCode: string
  description: string
  stars: number
  user: IUserEntity
  problem: IProblemEntity
  createdAt: Date
}
