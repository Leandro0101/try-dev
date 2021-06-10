import { ISolutionEntity } from '@domain/entities'
import { IMostPopularSolutionsUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { ILoadProblemByIdRepository, IMostPopularSolutionsRepository } from '../../repositories'

export class MostPopularSolutionsService implements IMostPopularSolutionsUseCase {
  constructor (
    private readonly mostPopularSolutions: IMostPopularSolutionsRepository,
    private readonly loadProblemById: ILoadProblemByIdRepository) {}

  async execute (problemId: string, skip: number): Promise<IUseCasesReturn<ISolutionEntity>> {
    const problem = await this.loadProblemById.execute(problemId)
    const failValidations: IFailValidations = {}

    if (!problem) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    const solutions = await this.mostPopularSolutions.execute(problemId, skip)

    return { content: solutions }
  }
}
