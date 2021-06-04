import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '..'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeEditSolutionValidations = (): ValidationComposite => {
  let validations: IValidation[] = []
  validations = makeRequiredParamValidation(['description', 'sourceCode'], validations)
  validations.push(makeUUIDValidation('solutionId'))
  return new ValidationComposite(validations)
}
