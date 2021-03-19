import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@/src/validations/validators'

export const makeValidationComposite = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['title', 'description', 'userId']) {
    validations.push(new RequiredParamValidation(field))
  }

  return new ValidationComposite(validations)
}
