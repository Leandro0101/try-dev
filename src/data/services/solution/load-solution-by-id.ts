import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { TReturnSolutionDTO } from '../../dtos'
import { ILoadSolutionByIdRepository } from '../../repositories'
import { userWithoutPassword } from '../utils/user-without-password'

export class LoadSolutionByIdService implements ILoadSolutionByIdUseCase {
  constructor (private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository) {}
  async execute (id: string): Promise<TReturnSolutionDTO> {
    const foundSolution = await this.loadSolutionByIdRepository.execute(id)

    if (!foundSolution) return null

    const { user, ...solution } = foundSolution
    const newSolution = Object.assign(solution, { user: userWithoutPassword(user) })

    return newSolution
  }
}
