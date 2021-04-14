import { IEditProblemRepository, ILoadProblemByIdRepository } from '../../repositories'
import { IEditProblemModel, IEditProblemUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { IProblemEntity } from '@domain/entities'

export class EditProblemService implements IEditProblemUseCase {
  constructor (
    private readonly editProblem: IEditProblemRepository,
    private readonly loadProblemById: ILoadProblemByIdRepository
  ) {}

  async execute (editProblemData: IEditProblemModel): Promise<IUseCasesReturn<IProblemEntity>> {
    const { problemId, description, title } = editProblemData
    let problem = await this.loadProblemById.execute(problemId)

    const failValidations: IFailValidations = {}
    if (!problem) {
      failValidations.problemNotFound = true
      return { failValidations }
    }

    problem = Object.assign(problem, { description, title })
    const updatedProblem = await this.editProblem.execute(problem)

    return { content: updatedProblem }
  }
}
