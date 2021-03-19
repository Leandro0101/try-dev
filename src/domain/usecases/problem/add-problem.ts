import { ICreateProblemDTO, IReturnProblemDTO } from '../../dtos'

export interface ICreateProblemModel {
  fields: Omit<ICreateProblemDTO, 'user'>
  userId: string
}

export interface IAddProblemUseCase {
  execute: (createProblemData: ICreateProblemModel) => Promise<IReturnProblemDTO>
}
