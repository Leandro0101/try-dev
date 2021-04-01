import { ValidationComposite } from '@/src/validations/validators'
import { IValidation } from '@presentation/protocols'
import { makeUUIDValidation } from '.'

export const makeLoadSolutionByIdValidation = (): ValidationComposite => {
  const validations: IValidation[] = [makeUUIDValidation('id')]

  return new ValidationComposite(validations)
}
