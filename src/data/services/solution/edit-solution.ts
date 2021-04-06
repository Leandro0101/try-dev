import { ISolutionEntity } from '@domain/entities'
import { IEditSolutionModel, IEditSolutionUseCase } from '@domain/usecases'
import { IEditSolutionRepository, ILoadSolutionByIdRepository } from '../../repositories'

export class EditSolutionService implements IEditSolutionUseCase {
  constructor (
    private readonly editSolutionRepository: IEditSolutionRepository,
    private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository
  ) {}

  async execute (editSolutionData: IEditSolutionModel): Promise<ISolutionEntity> {
    const { solutionId, description, sourceCode } = editSolutionData
    let solution = await this.loadSolutionByIdRepository.execute(solutionId)

    if (!solution) return null

    solution = Object.assign(solution, { description, sourceCode })

    const updatedSolution = await this.editSolutionRepository.execute(solution)

    return updatedSolution
  }
}
