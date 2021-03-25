import { InvalidParamError } from '@presentation/errors'
import { IValidation } from '@presentation/protocols'
import { IUUIDValidator } from '../protocols/uuid-validator'

export class UUIDValidation implements IValidation {
  constructor (private readonly fieldName: string, private readonly uuidValidator: IUUIDValidator) {}
  validate (input: any): Error {
    const isValid = this.uuidValidator.isValid(input[this.fieldName])

    if (!isValid) return new InvalidParamError(this.fieldName)
  }
}
