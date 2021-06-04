import { ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { makeUUIDValidation } from '..'
export const makeLoadUserByIdValidation = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('id')]
  return new ValidationComposite(validations)
}
