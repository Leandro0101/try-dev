import { ILoadSolutionByIdRepository } from '../../repositories'
import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { TReturnSolutionDTO } from '../../dtos'

export class LoadSolutionByIdService implements ILoadSolutionByIdUseCase {
  constructor (private readonly loadSolutionByIdRepository: ILoadSolutionByIdRepository) {}
  async execute (id: string): Promise<IUseCasesReturn<TReturnSolutionDTO>> {
    const solution = await this.loadSolutionByIdRepository.execute(id)

    const failValidations: IFailValidations = {}
    if (!solution) {
      failValidations.solutionNotFound = true
      return { failValidations }
    }

    return { content: solution }
  }
}
