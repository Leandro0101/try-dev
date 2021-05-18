import { IProblemEntity } from '@domain/entities'
import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { ILoadProblemsByUserRepository, ILoadUserByIdRepository } from '../../repositories'

export class LoadProblemsByUserService implements ILoadProblemsByUserUseCase {
  constructor (
    private readonly loadProblemsByUser: ILoadProblemsByUserRepository,
    private readonly loadUserById: ILoadUserByIdRepository
  ) {}

  async execute (userId: string, skip: number): Promise<IUseCasesReturn<IProblemEntity[]>> {
    const user = await this.loadUserById.execute(userId)
    const failValidations: IFailValidations = {}
    if (!user) {
      failValidations.userNotFound = true
      return { failValidations }
    }
    const problems = await this.loadProblemsByUser.execute(userId, skip)

    return { content: problems }
  }
}
