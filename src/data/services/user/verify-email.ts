import { IVerifyEmailUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { IDecrypter } from '../../protocols/criptograpy/decrypter'

export class VerifyEmailService implements IVerifyEmailUseCase {
  constructor (private readonly decrypter: IDecrypter) {}
  async execute (token: string): Promise<IUseCasesReturn<string>> {
    const tokenValue = Object(await this.decrypter.decrypt(token))
    const failValidations: IFailValidations = {}
    if (!tokenValue) {
      failValidations.withoutPermission = true
      return { failValidations }
    }
    return { content: tokenValue.userId }
  }
}
