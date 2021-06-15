import { LoadUserByIdRepository } from '@infra/typeorm/repositories'
import { VerifyUserStatusService } from '@data/services'
import { IVerifyUserStatusUseCase } from '@domain/usecases'

export const makeVerifyUserStatusService = (): IVerifyUserStatusUseCase => {
  return new VerifyUserStatusService(new LoadUserByIdRepository())
}
