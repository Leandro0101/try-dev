import { MissingParamError } from '@presentation/errors'
import { IValidation } from '@presentation/protocols'

export class RequiredParamValidation implements IValidation {
  constructor (private readonly fieldName: string) {}
  validate (input: any): Error {
    console.log(this.fieldName)
    console.log(input)
    if (!input[this.fieldName]) return new MissingParamError(this.fieldName)
  }
}
