import { ILoadProblemByIdUseCase } from '@domain/usecases'
import { TReturnProblemDTO } from '../../dtos'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { ILoadProblemByIdRepository } from '../../repositories'

export class LoadProblemByIdService implements ILoadProblemByIdUseCase {
  constructor (private readonly loadProblemByIdRepository: ILoadProblemByIdRepository) {}
  async execute (problemId: string): Promise<IUseCasesReturn<TReturnProblemDTO>> {
    const problem = await this.loadProblemByIdRepository.execute(problemId)
    const failValidations: IFailValidations = {}
    if (!problem) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    return { content: problem }
  }
}
