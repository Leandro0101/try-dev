import { IValidation } from '@presentation/protocols'
import { RequiredParamValidation } from '@validations/validators'

export const makeRequiredParamValidation = (fields: string[], validations: IValidation[]): IValidation[] => {
  for (const field of fields) {
    validations.push(new RequiredParamValidation(field))
  }
  return validations
}
