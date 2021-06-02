import { TReturnProblemDTO } from '@data/dtos'
import { IUseCasesReturn } from '@data/protocols'

export interface IEditProblemModel {
  description: string
  title: string
  problemId: string
}

export interface IEditProblemUseCase {
  execute: (editProblemData: IEditProblemModel, currentUserId: string) => Promise<IUseCasesReturn<TReturnProblemDTO>>
}
