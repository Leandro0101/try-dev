import { IValidation } from '@presentation/protocols'
import { IsANumberValidation, PageValidation, ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '.'

export const makeLoadProblemsByUserValidations = (): ValidationComposite => {
  const validations: IValidation[] = [
    makeUUIDValidation('userId'),
    new IsANumberValidation('page'),
    new PageValidation('page')
  ]

  return new ValidationComposite(validations)
}
