import { TReturnSolutionDTO } from '@/src/data/dtos'
export interface ILoadSolutionByIdUseCase {
  execute: (id: string) => Promise<TReturnSolutionDTO>
}
