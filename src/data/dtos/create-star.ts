import { ISolutionEntity } from '@domain/entities'

export interface ICreateStarDTO {
  solution: ISolutionEntity
  value: number
}
