import { IPayload } from '..'

export interface IDecrypter {
  decrypt: (value: string) => Promise<IPayload>
}
