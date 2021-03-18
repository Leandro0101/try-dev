import { InvalidParamError } from '@presentation/errors'
import { IValidation } from '@presentation/protocols'
import { IEmailValidator } from '../protocols/email-validator'

export class EmailValidation implements IValidation {
  constructor (private readonly emailValidator: IEmailValidator, private readonly fieldName: string) {}

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldName])

    if (!isValid) {
      return new InvalidParamError(input[this.fieldName])
    }
  }
}
