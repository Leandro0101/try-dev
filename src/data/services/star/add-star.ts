import { IAddStarUseCase, ICreateStarModel } from '@domain/usecases'
import { TReturnStarDTO } from '../../dtos'
import { IAddStarRepository, ILoadSolutionByIdRepository } from '../../repositories'
import { removeUserWithPasswordFromSolution } from '../utils/remove-user-with-password-from-solution'

export class AddStarService implements IAddStarUseCase {
  constructor (
    private readonly addStarRepository: IAddStarRepository,
    private readonly loadSolutionById: ILoadSolutionByIdRepository) {}

  async execute (createStarData: ICreateStarModel): Promise<TReturnStarDTO> {
    const { solutionId, value } = createStarData
    const solution = await this.loadSolutionById.execute(solutionId)

    if (!solution) return null

    const { solution: returnedSolution, ...star } = await this.addStarRepository
      .execute({ value, solution })

    const starWithUserWithoutPassword = removeUserWithPasswordFromSolution(returnedSolution, star)

    return starWithUserWithoutPassword
  }
}
