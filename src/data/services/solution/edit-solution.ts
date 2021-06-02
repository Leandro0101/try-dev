import { IEditSolutionRepository, ILoadSolutionByIdRepository } from '../../repositories'
import { IEditSolutionModel, IEditSolutionUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { ISolutionEntity } from '@domain/entities'

export class EditSolutionService implements IEditSolutionUseCase {
  constructor (
    private readonly editSolutionRepository: IEditSolutionRepository,
    private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository
  ) {}

  async execute (editSolutionData: IEditSolutionModel, currentUserId: string): Promise<IUseCasesReturn<ISolutionEntity>> {
    const { solutionId, description, sourceCode } = editSolutionData
    let solution = await this.loadSolutionByIdRepository.execute(solutionId)

    const failValidations: IFailValidations = {}
    if (!solution) {
      failValidations.solutionNotFound = true
      return { failValidations }
    }

    if (solution.user.id !== currentUserId) {
      failValidations.withoutPermission = true
      return { failValidations }
    }

    solution = Object.assign(solution, { description, sourceCode })
    const updatedSolution = await this.editSolutionRepository.execute(solution)

    return { content: updatedSolution }
  }
}
