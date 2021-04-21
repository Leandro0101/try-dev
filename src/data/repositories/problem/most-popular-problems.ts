import { IParamsToLoading } from '@/src/domain/usecases'
import { IProblemEntity } from '@domain/entities'

export interface IMostPopularProblemsRepository {
  take: number
  withYearGreaterOrEqualThan: (value: number, skip: number) => Promise<IProblemEntity[]>
  withYearLessOrEqualThan: (value: number, skip: number) => Promise<IProblemEntity[]>
  withYearIntervalBetween: (paramsToLoading: Omit<IParamsToLoading, 'take'>) => Promise<IProblemEntity[]>
}
