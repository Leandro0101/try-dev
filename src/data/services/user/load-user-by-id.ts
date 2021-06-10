import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { ILoadUserByIdRepository } from '../../repositories'
import { ILoadUserByIdUseCase } from '@domain/usecases'
import { IUserEntity } from '@domain/entities'

export class LoadUserByIdService implements ILoadUserByIdUseCase {
  constructor (private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (userId: string): Promise<IUseCasesReturn<IUserEntity>> {
    const user = await this.loadUserByIdRepository.execute(userId)

    const failValidations: IFailValidations = {}
    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }

    return { content: user }
  }
}
