import { ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { makeUUIDValidation } from '..'

export const makeMarkProblemAsResolvedValidation = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('problemId')]
  return new ValidationComposite(validations)
}
