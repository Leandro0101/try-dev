import { IUseCasesReturn } from '@data/protocols'
import { ICreateProblemDTO, TReturnProblemDTO } from '../../../data/dtos'

export interface ICreateProblemModel {
  fields: Omit<ICreateProblemDTO, 'user'>
  userId: string
}

export interface IAddProblemUseCase {
  execute: (createProblemData: ICreateProblemModel) => Promise<IUseCasesReturn<TReturnProblemDTO>>
}
