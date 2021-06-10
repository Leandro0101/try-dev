export interface IFailValidations {
  resourceNotFound?: boolean
  emailAlreadyRegister?: boolean
  userAlreadyGivedStar?: boolean
  invalidCredentials?: boolean
  withoutPermission?: boolean
}

export interface IUseCasesReturn <T> {
  content?: T
  failValidations?: IFailValidations
}
