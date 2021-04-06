import { EditSolutionRepository, LoadSolutionByIdRepository } from '@infra/typeorm/repositories'
import { IEditSolutionRepository, ILoadSolutionByIdRepository } from '@data/repositories'
import { EditSolutionService } from '@data/services'
import { IEditSolutionUseCase } from '@domain/usecases'

export const makeEditSolutionService = (): IEditSolutionUseCase => {
  const editSolutionRepository: IEditSolutionRepository = new EditSolutionRepository()
  const loadSolutionByIdRepository: ILoadSolutionByIdRepository = new LoadSolutionByIdRepository()

  return new EditSolutionService(editSolutionRepository, loadSolutionByIdRepository)
}
