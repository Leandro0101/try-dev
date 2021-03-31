import { IAddSolutionUseCase, ICreateSolutionModel } from '@domain/usecases'
import { TReturnSolutionDTO } from '../../dtos'
import {
  IAddSolutionRepository, ILoadProblemByIdRepository,
  ILoadUserByIdRepository
} from '../../repositories'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (
    private readonly loadUserByIdRepository: ILoadUserByIdRepository,
    private readonly loadProblemByIdRepository: ILoadProblemByIdRepository,
    private readonly addSolutionRepository: IAddSolutionRepository) {}

  async execute (createSolutionData: ICreateSolutionModel): Promise<TReturnSolutionDTO> {
    const { userId, problemId, description, sourceCode } = createSolutionData
    const user = await this.loadUserByIdRepository.execute(userId)
    const problem = await this.loadProblemByIdRepository.execute(problemId)

    if (!user || !problem) return null

    const { user: returnedUser, stars, problem: returnedProblem, ...solution } = await this
      .addSolutionRepository
      .execute({ description, sourceCode, user, problem })

    return solution
  }
}
