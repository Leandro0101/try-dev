import { IReturnSolutionDTO } from '@/src/data/dtos'
export interface ILoadSolutionByIdUseCase {
  execute: (id: string) => Promise<IReturnSolutionDTO>
}
