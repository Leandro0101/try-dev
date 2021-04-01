import { IUserEntity } from '@domain/entities'
import { ILoadUserByIdUseCase } from '@domain/usecases'
import { ILoadUserByIdRepository } from '../../repositories'

export class LoadUserByIdService implements ILoadUserByIdUseCase {
  constructor (private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (userId: string): Promise<Omit<IUserEntity, 'password'>> {
    const { password, ...foundUser } = await this.loadUserByIdRepository.execute(userId)

    if (!foundUser) return null

    const { solutions, problems, stars } = foundUser
    const TAKE = 15
    const INIT = 0
    const solutionsWithLimitedSize = solutions.slice(INIT, TAKE)
    const problemsWithLimitedSize = problems.slice(INIT, TAKE)
    const starsWithLimitedSize = stars.slice(INIT, TAKE)

    const user = Object.assign(foundUser,
      {
        problems: problemsWithLimitedSize,
        solutions: solutionsWithLimitedSize,
        stars: starsWithLimitedSize
      })

    return user
  }
}
