import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'

export const makeValidationComposite = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['description', 'sourceCode']) {
    validations.push(new RequiredParamValidation(field))
  }

  return new ValidationComposite(validations)
}
