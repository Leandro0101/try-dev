import { IUserStatus } from '@domain/entities'
import { IVerifyEmailUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../../protocols'
import { IDecrypter } from '../../../protocols/criptograpy/decrypter'
import { IChangeUserStatusRepository, ILoadUserByIdRepository } from '../../../repositories'

export class VerifyEmailService implements IVerifyEmailUseCase {
  constructor (
    private readonly decrypter: IDecrypter,
    private readonly loadUserById: ILoadUserByIdRepository,
    private readonly changeUserStatus: IChangeUserStatusRepository,
    private readonly criptograpyKey: string
  ) {}

  async execute (token: string): Promise<IUseCasesReturn<string>> {
    const tokenValue = await this.decrypter.decrypt(token, this.criptograpyKey)
    const failValidations: IFailValidations = {}
    if (!tokenValue) {
      failValidations.withoutPermission = true
      return { failValidations }
    }

    const userId = Object(tokenValue).userId
    const user = await this.loadUserById.execute(userId)
    if (user.status === IUserStatus.PENDING) {
      await this.changeUserStatus.execute(IUserStatus.ACTIVE, userId)
      return { content: userId }
    }

    return { }
  }
}
