import { IProblemEntity, IUserEntity } from '@domain/entities'
import { IAddSolutionToProblemUseCase, ILoadUserByIdUseCase } from '@domain/usecases'
import { ICreateSolutionDTO, IReturnSolutionDTO } from '../../dtos'

export class AddSolutionToProblemService implements IAddSolutionToProblemUseCase {
  constructor (private readonly loadUserByIdService: ILoadUserByIdUseCase) {}
  async execute (createSolutionData: ICreateSolutionDTO): Promise<IReturnSolutionDTO> {
    const { userId, problemId } = createSolutionData
    const user: IUserEntity = await this.loadUserByIdService.execute(userId)
    const problem: IProblemEntity = await this.loadProblemByIdService.execute(problemId)
  }
}
