import { UUIDValidatorAdapter } from '@infra/validators'
import { IValidation } from '@presentation/protocols'
import {
  RequiredParamValidation, UUIDValidation,
  ValidationComposite
} from '@validations/validators'

export const makeAddProblemValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['title', 'description', 'userId']) {
    validations.push(new RequiredParamValidation(field))
  }

  validations.push(new UUIDValidation('userId', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
