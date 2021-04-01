import { UUIDValidation, ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { UUIDValidatorAdapter } from '@infra/validators'
export const makeLoadUserByIdValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  validations.push(new UUIDValidation('id', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
