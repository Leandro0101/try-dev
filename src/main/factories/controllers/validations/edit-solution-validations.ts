import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '.'

export const makeEditSolutionValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['description', 'sourceCode']) {
    validations.push(new RequiredParamValidation(field))
  }

  for (const field of ['solutionId']) {
    validations.push(makeUUIDValidation(field))
  }

  return new ValidationComposite(validations)
}
