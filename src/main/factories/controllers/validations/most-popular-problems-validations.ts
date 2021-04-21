import { IsANumberValidation, ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'

export const makeMostPopularProblemsValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['intervalInit', 'intervalFinal', 'page']) {
    validations.push(new IsANumberValidation(field))
  }

  return new ValidationComposite(validations)
}
