import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeAuthenticationValidations = (): ValidationComposite => {
  let validations: IValidation[] = []
  validations = makeRequiredParamValidation(['email', 'password'], validations)
  return new ValidationComposite(validations)
}
