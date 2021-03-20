import { ICreateProblemDTO } from '@data/dtos'
import { IProblemEntity } from '@domain/entities'

export interface IAddProblemRepository {
  execute: (problem: ICreateProblemDTO) => Promise<IProblemEntity>
}
