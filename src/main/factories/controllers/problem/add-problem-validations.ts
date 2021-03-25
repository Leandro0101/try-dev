import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'

export const makeAddProblemValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['title', 'description', 'userId']) {
    validations.push(new RequiredParamValidation(field))
  }

  return new ValidationComposite(validations)
}
