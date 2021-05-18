import { IEditProblemRepository, ILoadProblemByIdRepository } from '../../repositories'
import { IEditProblemModel, IEditProblemUseCase } from '@domain/usecases'
import { IFailValidations, IUseCasesReturn } from '../../protocols'
import { TReturnProblemDTO } from '../../dtos'

export class EditProblemService implements IEditProblemUseCase {
  constructor (
    private readonly editProblem: IEditProblemRepository,
    private readonly loadProblemById: ILoadProblemByIdRepository
  ) {}

  async execute (editProblemData: IEditProblemModel): Promise<IUseCasesReturn<TReturnProblemDTO>> {
    const { problemId, description, title } = editProblemData
    let problem = await this.loadProblemById.execute(problemId)

    const failValidations: IFailValidations = { }
    if (!problem) {
      failValidations.problemNotFound = true
      return { failValidations }
    }

    problem = Object.assign(problem, { description, title })
    await this.editProblem.execute(problem)
    const { user, solutions, ...dataProblem } = problem
    return { content: dataProblem }
  }
}
