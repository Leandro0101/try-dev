import { UUIDValidatorAdapter } from '@infra/validators'
import { IValidation } from '@presentation/protocols'
import { UUIDValidation, ValidationComposite } from '@validations/validators'

export const makeUUIDValidation = (field: string): ValidationComposite => {
  const validations: IValidation[] = [new UUIDValidation(field, new UUIDValidatorAdapter())]

  return new ValidationComposite(validations)
}
