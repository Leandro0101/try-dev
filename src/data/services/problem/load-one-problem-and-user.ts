import { ILoadOneProblemAndUserUseCase, ILoadProblemByIdUseCase, ILoadUserByIdUseCase } from '@domain/usecases'
import { IReturnProblemAndUserModel } from '../../dtos'

export class LoadOneProblemAndUserService implements ILoadOneProblemAndUserUseCase {
  constructor (private readonly loadUserByIdService: ILoadUserByIdUseCase,
    private readonly loadProblemByIdService: ILoadProblemByIdUseCase) {}

  async execute (userId: string, problemId: string): Promise<IReturnProblemAndUserModel> {
    const user = await this.loadUserByIdService.execute(userId)
    const problem = await this.loadProblemByIdService.execute(problemId)

    return { user, problem }
  }
}
