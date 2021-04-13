export interface IFailValidations {
  userOrSolutionNonexistent?: boolean
  userAlreadyGivedStar?: boolean
  userNotFound?: boolean
  problemNotFound?: boolean
}

export interface IUseCasesReturn <T> {
  content?: T
  failValidations?: IFailValidations
}
