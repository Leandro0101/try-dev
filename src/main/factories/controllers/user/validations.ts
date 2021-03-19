import { EmailValidatorAdapter } from '@infra/validators/email-validator-adapter'
import { IValidation } from '@presentation/protocols'
import { ValidationComposite, RequiredParamValidation, EmailValidation } from '@validations/validators'
import { ComparePasswordsValidation } from '@validations/validators/compare-password-validation'

export const makeAddUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredParamValidation(field))
  }

  validations.push(new ComparePasswordsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation(new EmailValidatorAdapter(), 'email'))

  return new ValidationComposite(validations)
}
