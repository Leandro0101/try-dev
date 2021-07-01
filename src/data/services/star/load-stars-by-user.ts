import { ILoadStarsByUserUseCase } from '@domain/usecases'
import { IStarEntity } from '@domain/entities'
import { ILoadStarsByUserRepository, ILoadUserByIdRepository } from '../../repositories'
import { IFailValidations, IUseCasesReturn } from '../../protocols'

export class LoadStarsByUserService implements ILoadStarsByUserUseCase {
  constructor (
    private readonly loadStarsByUser: ILoadStarsByUserRepository,
    private readonly loadUserById: ILoadUserByIdRepository
  ) {}

  async execute (userId: string, skip: number): Promise<IUseCasesReturn<IStarEntity[]>> {
    const user = await this.loadUserById.execute(userId)
    const failValidations: IFailValidations = {}

    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    const stars = await this.loadStarsByUser.execute(userId, skip)

    return { content: stars }
  }
}
