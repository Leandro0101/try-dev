import { IUUIDValidator } from '@validations/protocols/uuid-validator'
import validator from 'validator'
export class UUIDValidatorAdapter implements IUUIDValidator {
  isValid (value: string): boolean {
    return validator.isUUID(value)
  }
}
