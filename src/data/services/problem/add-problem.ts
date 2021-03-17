import { IProblemEntity } from '@domain/entities'
import { IAddProblemUseCase, ICreateProblemModel, ILoadUserByIdUseCase } from '@domain/usecases'
import { IAddProblemRepository } from '../../repositories'

export class AddProblemService implements IAddProblemUseCase {
  constructor (private readonly addProblemRepository: IAddProblemRepository, private readonly loadUserByIdService: ILoadUserByIdUseCase) {}

  async execute (problemData: ICreateProblemModel): Promise<IProblemEntity> {
    const user = await this.loadUserByIdService.execute(problemData.userId)
    const { title, description } = problemData.fields

    if (!user) {
      throw new Error('User not found')
    }

    const createdProblem = await this.addProblemRepository.execute({ title, description, user })

    return createdProblem
  }
}
