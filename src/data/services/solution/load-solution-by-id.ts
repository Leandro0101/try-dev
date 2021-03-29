import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { IReturnSolutionDTO } from '../../dtos'
import { ILoadSolutionByIdRepository } from '../../repositories'
import { userWithoutPassword } from '../utils/user-without-password'

export class LoadSolutionByIdService implements ILoadSolutionByIdUseCase {
  constructor (private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository) {}
  async execute (id: string): Promise<IReturnSolutionDTO> {
    const { user, ...solution } = await this.loadSolutionByIdRepository.execute(id)
    if (!solution) return null

    return { solution, user: userWithoutPassword(user) }
  }
}
