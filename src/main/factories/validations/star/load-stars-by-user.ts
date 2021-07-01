import { IsANumberValidation, PageValidation, RequiredParamValidation, ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { makeUUIDValidation } from '..'

export const makeLoadStarsByUserValidation = (): ValidationComposite => {
  const validations: IValidation[] = [
    makeUUIDValidation('userId'),
    new RequiredParamValidation('page'),
    new IsANumberValidation('page'),
    new PageValidation('page')
  ]
  return new ValidationComposite(validations)
}
