import { EmailValidatorAdapter } from '@infra/validators/email-validator-adapter'
import { IValidation } from '@presentation/protocols'
import { ValidationComposite, RequiredParamValidation, EmailValidation } from '@validations/validators'

export const makeAddUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['name', 'email', 'password']) {
    validations.push(new RequiredParamValidation(field))
  }
  validations.push(new EmailValidation(new EmailValidatorAdapter(), 'email'))
  return new ValidationComposite(validations)
}
