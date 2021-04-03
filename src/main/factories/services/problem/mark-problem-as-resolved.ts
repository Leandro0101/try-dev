import { ILoadProblemByIdRepository, IMarkProblemAsResolvedRepository } from '@data/repositories'
import { MarkProblemAsResolvedService } from '@data/services'
import { IMarkProblemAsResolvedUseCase } from '@domain/usecases'
import { LoadProblemByIdRepository, MarkProblemAsResolvedRepository } from '@infra/typeorm/repositories'

export const makeMarkProblemAsResolvedService = (): IMarkProblemAsResolvedUseCase => {
  const markProblemAsResolvedRepository: IMarkProblemAsResolvedRepository = new MarkProblemAsResolvedRepository()
  const loadProblemByIdRepository: ILoadProblemByIdRepository = new LoadProblemByIdRepository()

  return new MarkProblemAsResolvedService(markProblemAsResolvedRepository, loadProblemByIdRepository)
}
