import { UUIDValidatorAdapter } from '@infra/validators'
import { UUIDValidation } from '@/src/validations/validators'
import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'

export const makeLoadProblemsByUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = [new UUIDValidation('userId', new UUIDValidatorAdapter())]

  return new ValidationComposite(validations)
}
