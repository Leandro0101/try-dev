import { ISolutionEntity } from '@domain/entities'

export interface IReturnSolutionDTO {
  solution: Omit<ISolutionEntity, 'user' | 'problem'>
}
