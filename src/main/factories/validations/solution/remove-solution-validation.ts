import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '..'

export const makeRemoveSolutionValidations = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('solutionId')]
  return new ValidationComposite(validations)
}
