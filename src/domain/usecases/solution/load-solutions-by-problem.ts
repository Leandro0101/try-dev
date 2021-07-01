import { IUseCasesReturn } from '@data/protocols'
import { ISolutionEntity } from '../../entities'

export interface ILoadSolutionsByProblemUseCase {
  execute: (problemId: string, skip: number) => Promise<IUseCasesReturn<ISolutionEntity[]>>
}
