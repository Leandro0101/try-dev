import { IUseCasesReturn } from '@data/protocols'
import { IUserEntity } from '@domain/entities'

export interface ILoadUserByIdUseCase {
  execute: (userId: string) => Promise<IUseCasesReturn<IUserEntity>>
}
