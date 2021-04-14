import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation, ValidationComposite } from '@validations/validators'
import { makeUUIDValidation } from '.'

export const makeEditProblemValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['description', 'title']) {
    validations.push(new RequiredParamValidation(field))
  }

  for (const field of ['problemId']) {
    validations.push(makeUUIDValidation(field))
  }

  return new ValidationComposite(validations)
}
