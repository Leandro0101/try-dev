import { EditProblemRepository, LoadProblemByIdRepository } from '@infra/typeorm/repositories'
import { IEditProblemRepository, ILoadProblemByIdRepository } from '@data/repositories'
import { IEditProblemUseCase } from '@domain/usecases'
import { EditProblemService } from '@data/services'

export const makeEditProblemService = (): IEditProblemUseCase => {
  const editProblem: IEditProblemRepository = new EditProblemRepository()
  const loadProblemById: ILoadProblemByIdRepository = new LoadProblemByIdRepository()

  return new EditProblemService(editProblem, loadProblemById)
}
