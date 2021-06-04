import { InvalidParamError } from '@presentation/errors'
import { IValidation } from '@presentation/protocols'

export class StarValueValidation implements IValidation {
  constructor (private readonly fieldname) {}
  validate (input: any): Error {
    if (input[this.fieldname] < 0) return new InvalidParamError(this.fieldname)
  }
}
