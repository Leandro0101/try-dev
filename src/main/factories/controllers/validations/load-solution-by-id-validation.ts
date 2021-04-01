import { IValidation } from '@presentation/protocols'
import { UUIDValidation, ValidationComposite } from '@validations/validators'
import { UUIDValidatorAdapter } from '@infra/validators'

export const makeLoadSolutionByIdValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  validations.push(new UUIDValidation('id', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
