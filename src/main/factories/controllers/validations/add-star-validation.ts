import {
  ValidationComposite, RequiredParamValidation,
  IsANumberValidation, StarValueValidation
} from '@validations/validators'
import { IValidation } from '@presentation/protocols'

import { makeUUIDValidation } from '.'

export const makeAddStarValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  validations.push(new RequiredParamValidation('value'))
  validations.push(new IsANumberValidation('value'))
  validations.push(new StarValueValidation('value'))
  validations.push(makeUUIDValidation('userId'))
  validations.push(makeUUIDValidation('solutionId'))

  return new ValidationComposite(validations)
}
