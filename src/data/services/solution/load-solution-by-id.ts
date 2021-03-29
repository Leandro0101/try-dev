import { ISolutionEntity } from '@domain/entities'
import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { ILoadSolutionByIdRepository } from '../../repositories'

export class LoadSolutionByIdService implements ILoadSolutionByIdUseCase {
  constructor (private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository) {}
  async execute (id: string): Promise<ISolutionEntity> {
    const solution = await this.loadSolutionByIdRepository.execute(id)

    if (!solution) return null

    return solution
  }
}
