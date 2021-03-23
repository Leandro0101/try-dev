import { ILoadOneProblemByUserUseCase, ILoadUserByIdUseCase } from '@domain/usecases'
import { IReturnProblemByUser } from '../../dtos'
import { ILoadOneProblemByUserRepository } from '../../repositories'

export class LoadOneProblemByUserService implements ILoadOneProblemByUserUseCase {
  constructor (private readonly loadOneProblemByUserRepository: ILoadOneProblemByUserRepository,
    private readonly loadUserByIdService: ILoadUserByIdUseCase) {}

  async execute (userId: string, problemId: string): Promise<IReturnProblemByUser> {
    const user = await this.loadUserByIdService.execute(userId)
    const problem = await this.loadOneProblemByUserRepository.execute(userId, problemId)

    return { user, problem }
  }
}
