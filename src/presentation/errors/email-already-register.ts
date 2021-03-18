export class EmailAlreadyRegisterError extends Error {
  constructor (email: string) {
    super(`${email} already registered`)
    this.name = 'EmailAlreadyRegister'
  }
}
