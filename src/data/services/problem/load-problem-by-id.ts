import { IProblemEntity } from '@domain/entities'
import { ILoadProblemByIdUseCase } from '@domain/usecases'
import { ILoadProblemByIdRepository } from '../../repositories'

export class LoadProblemByIdService implements ILoadProblemByIdUseCase {
  constructor (private readonly loadProblemByIdRepository: ILoadProblemByIdRepository) {}
  async execute (problemId: string): Promise<IProblemEntity> {
    const problem = await this.loadProblemByIdRepository.execute(problemId)

    if (!problem) {
      return null
    }

    return problem
  }
}
