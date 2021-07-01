import { ISolutionEntity } from '@domain/entities'
import { ILoadSolutionsByProblemUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { ILoadProblemByIdRepository, ILoadSolutionsByProblemRepository } from '../../repositories'

export class LoadSolutionsByProblemService implements ILoadSolutionsByProblemUseCase {
  constructor (
    private readonly loadSolutionSolutions: ILoadSolutionsByProblemRepository,
    private readonly loadProblemById: ILoadProblemByIdRepository) {}

  async execute (problemId: string, skip: number): Promise<IUseCasesReturn<ISolutionEntity[]>> {
    const problem = await this.loadProblemById.execute(problemId)
    const failValidations: IFailValidations = {}

    if (!problem) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    const solutions = await this.loadSolutionSolutions.execute(problemId, skip)

    return { content: solutions }
  }
}
