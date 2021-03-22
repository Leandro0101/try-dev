import { IProblemEntity } from '../../domain/entities'

export interface IReturnProblemDTO {
  problem: Omit<IProblemEntity, 'user'>
}
