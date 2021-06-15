import { IUseCasesReturn } from '@/src/data/protocols'
import { IUserStatus } from '../../entities'

export interface IVerifyUserStatusUseCase {
  execute: (userId: string, statusToVerify: IUserStatus) => Promise<IUseCasesReturn<void>>
}
