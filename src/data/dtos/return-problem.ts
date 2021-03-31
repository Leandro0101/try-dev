import { IProblemEntity } from '../../domain/entities'

export type TReturnProblemDTO = Omit<IProblemEntity, 'user' | 'solutions'>
