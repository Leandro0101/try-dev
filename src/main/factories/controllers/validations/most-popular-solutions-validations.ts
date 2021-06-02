import {
  IsANumberValidation, PageValidation, RequiredParamValidation,
  UUIDValidation, ValidationComposite
} from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { UUIDValidatorAdapter } from '@infra/validators'

export const makeMostPopularSolutionsValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  validations.push(new RequiredParamValidation('page'))
  validations.push(new RequiredParamValidation('problem'))
  validations.push(new IsANumberValidation('page'))
  validations.push(new PageValidation('page'))
  validations.push(new UUIDValidation('problem', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
