import { IProblemEntity } from './problem'
import { IUserEntity } from './user'

export interface ISolutionEntity {
  id: string
  source_code: string
  description: string
  stars: number
  user: IUserEntity
  problem: IProblemEntity
  created_at: Date
}
