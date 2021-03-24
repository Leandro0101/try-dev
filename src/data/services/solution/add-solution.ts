import { IAddSolutionUseCase, ICreateSolutionModel, ILoadOneProblemAndUserUseCase } from '@domain/usecases'
import { IReturnSolutionDTO } from '../../dtos'
import { IAddSolutionToProblemRepository, IAddSolutionToUserRepository, IAddSolutionRepository } from '../../repositories'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (
    private readonly loadOneProblemAndUserService: ILoadOneProblemAndUserUseCase,
    private readonly addSolutionToProblemRepository: IAddSolutionToProblemRepository,
    private readonly addSolutionToUserRepository: IAddSolutionToUserRepository,
    private readonly addSolutionRepository: IAddSolutionRepository) {}

  async execute (createSolutionData: ICreateSolutionModel): Promise<IReturnSolutionDTO> {
    const { userId, problemId, description, sourceCode } = createSolutionData
    const { user, problem } = await this.loadOneProblemAndUserService.execute(userId, problemId)
    const solution = await this.addSolutionRepository.execute({ description, sourceCode })

    await this.addSolutionToProblemRepository.execute(solution, problem)
    await this.addSolutionToUserRepository.execute(solution, user)

    return solution
  }
}
