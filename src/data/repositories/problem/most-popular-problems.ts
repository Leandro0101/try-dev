import { IParamsToLoading } from '@/src/domain/usecases'
import { IProblemEntity } from '@domain/entities'

export interface IMostPopularProblemsRepository {
  execute: (paramsToLoading: IParamsToLoading) => Promise<IProblemEntity[]>
}
