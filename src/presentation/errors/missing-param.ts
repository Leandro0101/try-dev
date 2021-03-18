export class MissingParamError extends Error {
  constructor (param: string) {
    super(`Param ${param} must be provider`)
    this.name = 'MissingParamError'
  }
}
