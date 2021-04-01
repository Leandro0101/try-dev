import { EmailValidatorAdapter } from '@infra/validators'
import { IValidation } from '@presentation/protocols'
import {
  ValidationComposite, RequiredParamValidation,
  EmailValidation, ComparePasswordsValidation
} from '@validations/validators'

export const makeAddUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredParamValidation(field))
  }

  validations.push(new ComparePasswordsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation(new EmailValidatorAdapter(), 'email'))

  return new ValidationComposite(validations)
}
