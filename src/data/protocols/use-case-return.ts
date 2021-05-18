export interface IFailValidations {
  userOrSolutionNonexistent?: boolean
  userOrProblemNonexistent?: boolean
  emailAlreadyRegister?: boolean
  userAlreadyGivedStar?: boolean
  invalidCredentials?: boolean
  solutionNotFound?: boolean
  problemNotFound?: boolean
  userNotFound?: boolean
  hasPermission?: boolean
}

export interface IUseCasesReturn <T> {
  content?: T
  failValidations?: IFailValidations
}
