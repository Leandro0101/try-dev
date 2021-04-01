import { IValidation } from '@presentation/protocols'
import {
  RequiredParamValidation,
  ValidationComposite
} from '@validations/validators'
import { makeUUIDValidation } from '.'

export const makeAddProblemValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['title', 'description', 'userId']) {
    validations.push(new RequiredParamValidation(field))
  }

  validations.push(makeUUIDValidation('userId'))

  return new ValidationComposite(validations)
}
