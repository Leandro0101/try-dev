import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '.'

export const makeLoadProblemsByUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('userId')]

  return new ValidationComposite(validations)
}
