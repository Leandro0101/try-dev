import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '.'

export const makeLoadProblemByIdValidations = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('id')]

  return new ValidationComposite(validations)
}
