import { IsANumberValidation, PageValidation, ValidationComposite } from '@validations/validators'
import { IValidation } from '@presentation/protocols'

export const makeMostPopularProblemsValidations = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['intervalInit', 'intervalFinal', 'page']) {
    validations.push(new IsANumberValidation(field))
  }

  validations.push(new PageValidation('page'))
  return new ValidationComposite(validations)
}
