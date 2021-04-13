export interface IFailValidations {
  userOrSolutionNonexistent?: boolean
  userOrProblemNonexistent?: boolean
  emailAlreadyRegister?: boolean
  userAlreadyGivedStar?: boolean
  solutionNotFound?: boolean
  problemNotFound?: boolean
  userNotFound?: boolean
}

export interface IUseCasesReturn <T> {
  content?: T
  failValidations?: IFailValidations
}
