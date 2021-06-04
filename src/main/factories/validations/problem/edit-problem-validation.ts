import { IValidation } from '@presentation/protocols'
import { ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '..'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeEditProblemValidations = (): ValidationComposite => {
  let validations: IValidation[] = []
  validations = makeRequiredParamValidation(['description', 'title'], validations)
  validations.push(makeUUIDValidation('problemId'))
  return new ValidationComposite(validations)
}
