import {
  IsANumberValidation, RequiredParamValidation,
  UUIDValidation, ValidationComposite
} from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { UUIDValidatorAdapter } from '@infra/validators'

export const makeMostPopularSolutionsValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  validations.push(new RequiredParamValidation('page'))
  validations.push(new RequiredParamValidation('p'))
  validations.push(new IsANumberValidation('page'))
  validations.push(new UUIDValidation('p', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
