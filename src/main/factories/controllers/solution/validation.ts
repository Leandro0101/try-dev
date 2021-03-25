import { UUIDValidatorAdapter } from '@infra/validators/uuid-validator-adapter'
import { UUIDValidation } from '@/src/validations/validators/uuid-validation'
import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'

export const makeValidationComposite = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['description', 'sourceCode']) {
    validations.push(new RequiredParamValidation(field))
  }

  for (const field of ['problemId', 'userId']) {
    validations.push(new UUIDValidation(field, new UUIDValidatorAdapter()))
  }

  return new ValidationComposite(validations)
}
