import { IProblemEntity } from '../../entities'

export interface IParamsToLoading {
  skip: number
  intervalInit: number
  intervalFinal: number
}

export interface IMostPopularProblemsUseCase {
  execute: (paramsToLoading: IParamsToLoading) => Promise<IProblemEntity[]>
}
