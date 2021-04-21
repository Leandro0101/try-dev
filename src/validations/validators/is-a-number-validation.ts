import { InvalidParamError } from '@presentation/errors'
import { IValidation } from '@presentation/protocols'

export class IsANumberValidation implements IValidation {
  constructor (private readonly fieldname) {}
  validate (input: any): Error {
    if (isNaN(input[this.fieldname]) && input[this.fieldname]) return new InvalidParamError(this.fieldname)
  }
}
