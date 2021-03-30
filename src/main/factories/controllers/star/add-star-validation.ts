import { ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation } from '../../../../validations/validators/required-param-validation'
import { UUIDValidation } from '../../../../validations/validators/uuid-validation'
import { UUIDValidatorAdapter } from '../../../../infra/validators/uuid-validator-adapter'

export const makeAddStarValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  validations.push(new RequiredParamValidation('value'))
  validations.push(new UUIDValidation('solutionId', new UUIDValidatorAdapter()))

  return new ValidationComposite(validations)
}
