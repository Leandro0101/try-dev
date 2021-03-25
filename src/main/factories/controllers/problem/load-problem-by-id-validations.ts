import { UUIDValidatorAdapter } from '@infra/validators/uuid-validator-adapter'
import { UUIDValidation } from '@/src/validations/validators/uuid-validation'
import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'

export const makeLoadProblemByIdValidations = (): ValidationComposite => {
  const validations: IValidation[] = [new UUIDValidation('id', new UUIDValidatorAdapter())]

  return new ValidationComposite(validations)
}
