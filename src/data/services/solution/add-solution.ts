import { IAddSolutionUseCase, ICreateSolutionModel, ILoadOneProblemAndUserUseCase } from '@domain/usecases'
import { ICreateSolutionDTO, IReturnSolutionDTO } from '../../dtos'
import { IAddSolutionToProblemRepository, IAddSolutionToUserRepository } from '../../repositories'

export class AddSolutionService implements IAddSolutionUseCase {
  constructor (private readonly loadOneProblemAndUserUseCase: ILoadOneProblemAndUserUseCase,
    private readonly addSolutionToProblemRepository: IAddSolutionToProblemRepository,
    private readonly addSolutionToUserRepository: IAddSolutionToUserRepository) {}

  async execute (createSolutionData: ICreateSolutionModel): Promise<IReturnSolutionDTO> {
    const { userId, problemId, description, sourceCode } = createSolutionData
    const { user, problem } = await this.loadOneProblemAndUserUseCase.execute(userId, problemId)
    const { created_at, id, stars } = await this.addSolutionToProblemRepository
    .execute({ description, sourceCode }, problem)
    await this.addSolutionToUserRepository.execute({ description, sourceCode }, user)
    return { id, sourceCode, stars, created_at, description } 
  }
}
