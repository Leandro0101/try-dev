import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '..'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeAddSolutionValidations = (): ValidationComposite => {
  let validations: IValidation[] = []
  validations = makeRequiredParamValidation(['description', 'sourceCode'], validations)
  for (const field of ['problemId', 'userId']) {
    validations.push(makeUUIDValidation(field))
  }
  return new ValidationComposite(validations)
}
