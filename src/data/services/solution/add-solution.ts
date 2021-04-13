import { IAddSolutionUseCase, ICreateSolutionModel } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import {
  IAddSolutionRepository, ILoadProblemByIdRepository,
  ILoadUserByIdRepository
} from '../../repositories'

import { TReturnSolutionDTO } from '../../dtos'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (
    private readonly loadUserByIdRepository: ILoadUserByIdRepository,
    private readonly loadProblemByIdRepository: ILoadProblemByIdRepository,
    private readonly addSolutionRepository: IAddSolutionRepository) {}

  async execute (createSolutionData: ICreateSolutionModel): Promise<IUseCasesReturn<TReturnSolutionDTO>> {
    const { userId, problemId, description, sourceCode } = createSolutionData
    const user = await this.loadUserByIdRepository.execute(userId)
    const problem = await this.loadProblemByIdRepository.execute(problemId)

    const failValidations: IFailValidations = {}
    if (!user || !problem) {
      failValidations.userOrProblemNonexistent = true
      return { failValidations }
    }

    const response = await this.addSolutionRepository.execute({
      description, sourceCode, user, problem
    })

    const { user: u, stars, problem: p, ...solution } = response
    return { content: solution }
  }
}
