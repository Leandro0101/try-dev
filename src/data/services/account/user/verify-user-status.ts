import { IUserStatus } from '@domain/entities'
import { IVerifyUserStatusUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../../protocols'
import { ILoadUserByIdRepository } from '../../../repositories'

export class VerifyUserStatusService implements IVerifyUserStatusUseCase {
  constructor (private readonly loadUserById: ILoadUserByIdRepository) { }
  async execute (userId: string, statusToVerify: IUserStatus): Promise<IUseCasesReturn<void>> {
    const user = await this.loadUserById.execute(userId)
    const failValidations: IFailValidations = {}
    if (!user) {
      failValidations.resourceNotFound = true
      return { failValidations }
    }
    if (user.status === statusToVerify) return { }
    failValidations.withoutPermission = true
    return { failValidations }
  }
}
