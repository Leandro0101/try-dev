import { ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { makeUUIDValidation } from '..'
export const makeSendAccountVerificationEmailValidation = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('userId')]
  return new ValidationComposite(validations)
}
