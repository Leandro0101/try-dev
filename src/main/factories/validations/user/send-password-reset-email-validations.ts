import { EmailValidatorAdapter } from '@infra/validators'
import { IValidation } from '@presentation/protocols'
import { EmailValidation, ValidationComposite } from '@validations/validators'

export const makeSendPasswordResetEmailValidation = (): ValidationComposite => {
  const validations: IValidation[] = [new EmailValidation(new EmailValidatorAdapter(), 'email')]
  return new ValidationComposite(validations)
}
