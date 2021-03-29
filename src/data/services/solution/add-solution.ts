import { IAddSolutionUseCase, ICreateSolutionModel, ILoadOneProblemAndUserUseCase } from '@domain/usecases'
import { IReturnSolutionDTO } from '../../dtos'
import { IAddSolutionRepository } from '../../repositories'
import { userWithoutPassword } from '../utils/user-without-password'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (
    private readonly loadOneProblemAndUserService: ILoadOneProblemAndUserUseCase,
    private readonly addSolutionRepository: IAddSolutionRepository) {}

  async execute (createSolutionData: ICreateSolutionModel): Promise<IReturnSolutionDTO> {
    const { userId, problemId, description, sourceCode } = createSolutionData
    const { user, problem } = await this.loadOneProblemAndUserService
      .execute(userId, problemId)

    if (!user || !problem) return null

    const { user: returnedUser, ...solution } = await this.addSolutionRepository
      .execute({ description, sourceCode, user, problem })

    return { solution, user: userWithoutPassword(returnedUser) }
  }
}
