import { ISolutionEntity } from '../../entities/solution'
export interface ILoadSolutionByIdUseCase {
  execute: (id: string) => Promise<ISolutionEntity>
}
