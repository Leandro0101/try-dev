import { ValidationComposite, RequiredParamValidation } from '@validations/validators'
import { IValidation } from '@presentation/protocols'

import { makeUUIDValidation } from '.'

export const makeAddStarValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  validations.push(new RequiredParamValidation('value'))
  validations.push(makeUUIDValidation('userId'))
  validations.push(makeUUIDValidation('solutionId'))

  return new ValidationComposite(validations)
}
