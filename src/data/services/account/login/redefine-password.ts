import { IRedefinePasswordUseCase } from '@domain/usecases'
import { IEncrypter, IFailValidations, IUseCasesReturn } from '../../../protocols'
import { IDecrypter } from '../../../protocols/criptograpy/decrypter'
import { IChangeUserPasswordRepository } from '../../../repositories'

export class RedefinePasswordService implements IRedefinePasswordUseCase {
  constructor (
    private readonly decripter: IDecrypter,
    private readonly criptograpyKey: string,
    private readonly changePassword: IChangeUserPasswordRepository,
    private readonly encrypter: IEncrypter
  ) {}

  async execute (token: string, password: string): Promise<IUseCasesReturn<string>> {
    const tokenValue = await this.decripter.decrypt(token, this.criptograpyKey)
    const failValidations: IFailValidations = {}
    if (!tokenValue) {
      failValidations.withoutPermission = true
      return { failValidations }
    }

    const email = Object(tokenValue).userEmail
    const passwordHash = await this.encrypter.encrypt(password)
    await this.changePassword.execute(passwordHash, email)
    return { }
  }
}
