export interface IFailValidations {
  userOrSolutionNonexistent?: boolean
  userAlreadyGivedStar?: boolean
}

export interface IUseCasesReturn <T> {
  content?: T
  failValidations?: IFailValidations
}
