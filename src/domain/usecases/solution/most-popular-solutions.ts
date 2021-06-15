import { IUseCasesReturn } from '@data/protocols'
import { ISolutionEntity } from '../../entities'

export interface IMostPopularSolutionsUseCase {
  execute: (problemId: string, skip: number) => Promise<IUseCasesReturn<ISolutionEntity>>
}
