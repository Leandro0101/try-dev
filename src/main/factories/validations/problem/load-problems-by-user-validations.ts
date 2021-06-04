import { IValidation } from '@presentation/protocols'
import { IsANumberValidation, PageValidation, RequiredParamValidation, ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '..'

export const makeLoadProblemsByUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = [
    new RequiredParamValidation('page'),
    makeUUIDValidation('userId'),
    new IsANumberValidation('page'),
    new PageValidation('page')
  ]
  return new ValidationComposite(validations)
}
