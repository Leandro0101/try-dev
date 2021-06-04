import {
  IsANumberValidation, PageValidation,
  UUIDValidation, ValidationComposite
} from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { UUIDValidatorAdapter } from '@infra/validators'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeMostPopularSolutionsValidations = (): ValidationComposite => {
  let validations: IValidation[] = []
  validations = makeRequiredParamValidation(['page', 'problem'], validations)
  validations.push(new IsANumberValidation('page'))
  validations.push(new PageValidation('page'))
  validations.push(new UUIDValidation('problem', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
