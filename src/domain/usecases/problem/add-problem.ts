import { IProblemEntity } from '@domain/entities'
import { ICreateProblemDTO } from '../../dtos'

export interface ICreateProblemModel {
  fields: Omit<ICreateProblemDTO, 'user'>
  userId: string
}

export interface IAddProblemUseCase {
  execute: (createProblemData: ICreateProblemModel) => Promise<IProblemEntity>
}
