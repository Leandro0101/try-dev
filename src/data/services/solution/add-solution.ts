import { IAddSolutionUseCase, ICreateSolutionModel, ILoadOneProblemAndUserUseCase } from '@domain/usecases'
import { IReturnSolutionDTO } from '../../dtos'
import { IAddSolutionToProblemRepository, IAddSolutionToUserRepository } from '../../repositories'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (private readonly loadOneProblemAndUserService: ILoadOneProblemAndUserUseCase,
    private readonly addSolutionToProblemRepository: IAddSolutionToProblemRepository,
    private readonly addSolutionToUserRepository: IAddSolutionToUserRepository) {}

  async execute (createSolutionData: ICreateSolutionModel): Promise<IReturnSolutionDTO> {
    const { userId, problemId, description, sourceCode } = createSolutionData
    const { user, problem } = await this.loadOneProblemAndUserService.execute(userId, problemId)
    const { user: returnedUser, problem: returnedProblem, ...solution } = await this.
    addSolutionToProblemRepository.execute({ description, sourceCode }, problem)

    await this.addSolutionToUserRepository.execute({ description, sourceCode }, user)

    return solution
  }
}
