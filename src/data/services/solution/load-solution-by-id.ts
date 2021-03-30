import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { TReturnSolutionDTO } from '../../dtos'
import { ILoadSolutionByIdRepository } from '../../repositories'
import { userWithoutPassword } from '../utils/user-without-password'

export class LoadSolutionByIdService implements ILoadSolutionByIdUseCase {
  constructor (private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository) {}
  async execute (id: string): Promise<TReturnSolutionDTO> {
    const { user, ...solution } = await this.loadSolutionByIdRepository.execute(id)
    if (!solution) return null

    const newSolution = Object.assign(solution, { user: userWithoutPassword(user) })

    return newSolution
  }
}
