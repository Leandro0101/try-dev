import { IProblemEntity } from '@domain/entities'
export interface IMarkProblemAsResolvedRepository {
  execute: (problem: IProblemEntity) => Promise<void>
}
