import { IValidation } from '@presentation/protocols'
import {
  ValidationComposite
} from '@validations/validators'
import { makeUUIDValidation } from '..'
import { makeRequiredParamValidation } from '../shared/required-param-validation'

export const makeAddProblemValidation = (): ValidationComposite => {
  let validations: IValidation[] = []
  const fields = ['title', 'description', 'userId']
  validations = makeRequiredParamValidation(fields, validations)
  validations.push(makeUUIDValidation('userId'))
  return new ValidationComposite(validations)
}
