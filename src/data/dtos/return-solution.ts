import { ISolutionEntity } from '@domain/entities'

export interface IReturnSolutionDTO {
  id: string
  sourceCode: string
  description: string
  stars: number
  created_at: Date
}
