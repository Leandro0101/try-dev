import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'

export const makeAuthenticationValidations = (): ValidationComposite => {
  const validations: IValidation[] = []
  validations.push(new RequiredParamValidation('email'))
  validations.push(new RequiredParamValidation('password'))

  return new ValidationComposite(validations)
}
