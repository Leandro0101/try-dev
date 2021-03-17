import { IProblemEntity } from '@domain/entities'
export interface IAddProblemUseCase {
  execute: (title: string, description: string, userId: string) => Promise<IProblemEntity>
}
