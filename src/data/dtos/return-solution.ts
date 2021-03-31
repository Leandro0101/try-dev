import { ISolutionEntity } from '../../domain/entities/solution'

export type TReturnSolutionDTO = Omit<ISolutionEntity, 'user' | 'problem' | 'stars'>
