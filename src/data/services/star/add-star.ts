import { IAddStarUseCase, ICreateStarModel } from '@domain/usecases'
import { TReturnStarDTO } from '../../dtos'
import { IFailValidations, IUseCasesReturn } from '../../protocols/use-case-return'
import {
  IAddStarRepository,
  ILoadSolutionByIdRepository,
  ILoadStarsFromUserRepository,
  ILoadUserByIdRepository
} from '../../repositories'

export class AddStarService implements IAddStarUseCase {
  constructor (
    private readonly addStar: IAddStarRepository,
    private readonly loadSolutionById: ILoadSolutionByIdRepository,
    private readonly loadUserById: ILoadUserByIdRepository,
    private readonly loadStarFromUser: ILoadStarsFromUserRepository) {}

  async execute (createStarData: ICreateStarModel): Promise<IUseCasesReturn<TReturnStarDTO>> {
    const { solutionId, value, userId } = createStarData
    const solution = await this.loadSolutionById.execute(solutionId)
    const user = await this.loadUserById.execute(userId)
    const failValidations: IFailValidations = {}

    if (!solution || !user) {
      failValidations.userOrSolutionNonexistent = true
      return { failValidations }
    }

    const existentStar = await this.loadStarFromUser.execute(userId, solutionId)

    if (existentStar) {
      failValidations.userAlreadyGivedStar = true
      return { failValidations }
    }

    const { solution: returnedSolution, user: returnedUser, ...star } =
      await this.addStar.execute({ value, solution, user })

    return { content: star }
  }
}
