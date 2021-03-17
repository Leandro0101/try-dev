import { IProblemEntity } from '@domain/entities'
import { IAddProblemUseCase } from '@domain/usecases'
import { IAddProblemRepository } from '../../repositories'

export class AddProbleService implements IAddProblemUseCase {
  constructor (private readonly addProblemRepository: IAddProblemRepository) {}
  async execute (title: string, description: string, userId: string): Promise<IProblemEntity> {
    return null
  }
}
