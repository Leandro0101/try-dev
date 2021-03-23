import { ILoadProblemByIdRepository } from "@data/repositories";
import { IProblemEntity } from "@domain/entities";
import { getCustomRepository } from "typeorm";
import { BaseProblemRepository } from "../base-problem-repository";

export class LoadProblemByIdRepository implements ILoadProblemByIdRepository {
  async execute (problemId: string): Promise<IProblemEntity> {
    const baseRepository = getCustomRepository(BaseProblemRepository)
    const problem = await baseRepository.findOne(problemId)

    return problem
  }
}