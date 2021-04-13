export interface IFailValidations {
  userOrSolutionNonexistent?: boolean
  userOrProblemNonexistent?: boolean
  userAlreadyGivedStar?: boolean
  problemNotFound?: boolean
  solutionNotFound?: boolean
  userNotFound?: boolean

}

export interface IUseCasesReturn <T> {
  content?: T
  failValidations?: IFailValidations
}
