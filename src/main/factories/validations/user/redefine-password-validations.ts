import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'

export const makeRedefinePasswordValidations = (): ValidationComposite => {
  const validations: IValidation[] = [new RequiredParamValidation('password')]
  return new ValidationComposite(validations)
}
