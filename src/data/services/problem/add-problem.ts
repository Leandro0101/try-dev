import { IAddProblemRepository, ILoadUserByIdRepository } from '../../repositories'
import { IAddProblemUseCase, ICreateProblemModel } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { TReturnProblemDTO } from '@data/dtos'

export class AddProblemService implements IAddProblemUseCase {
  constructor (
    private readonly addProblemRepository: IAddProblemRepository,
    private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (problemData: ICreateProblemModel): Promise<IUseCasesReturn<TReturnProblemDTO>> {
    const loadedUser = await this.loadUserByIdRepository.execute(problemData.userId)
    const { title, description } = problemData.fields
    const failValidations: IFailValidations = {}
    if (!loadedUser) {
      failValidations.userNotFound = true
      return { failValidations }
    }

    const { solutions, user, ...problem } = await this.addProblemRepository
      .execute({ title, description, user: loadedUser })

    return { content: problem }
  }
}
