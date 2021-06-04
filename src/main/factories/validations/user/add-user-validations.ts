import { EmailValidatorAdapter } from '@infra/validators'
import { IValidation } from '@presentation/protocols'
import {
  ValidationComposite,
  EmailValidation, ComparePasswordsValidation
} from '@validations/validators'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeAddUserValidations = (): ValidationComposite => {
  let validations: IValidation[] = []
  const fields = [
    'name', 'email', 'password', 'passwordConfirmation'
  ]
  validations = makeRequiredParamValidation(fields, validations)
  validations.push(new ComparePasswordsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation(new EmailValidatorAdapter(), 'email'))
  return new ValidationComposite(validations)
}
