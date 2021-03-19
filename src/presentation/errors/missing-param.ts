export class MissingParamError extends Error {
  constructor (param: string) {
    super(`${param} param must be provided`)
    this.name = 'MissingParamError'
  }
}
