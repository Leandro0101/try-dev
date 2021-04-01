import { ILoadProblemByIdUseCase } from '@domain/usecases'
import { TReturnProblemDTO } from '../../dtos'
import { ILoadProblemByIdRepository } from '../../repositories'

export class LoadProblemByIdService implements ILoadProblemByIdUseCase {
  constructor (private readonly loadProblemByIdRepository: ILoadProblemByIdRepository) {}
  async execute (problemId: string): Promise<TReturnProblemDTO> {
    const problem = await this.loadProblemByIdRepository.execute(problemId)

    if (!problem) return null

    return problem
  }
}
