import { IHashComparator, IEncrypter } from '@data/protocols'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements IEncrypter, IHashComparator {
  constructor (private readonly salt?: number) {}

  async compare (plaintext: string, ciphertext: string): Promise<boolean> {
    const isValid = await bcrypt.compareSync(plaintext, ciphertext)

    return isValid
  }

  async encrypt (plaintext: string): Promise<string> {
    const ciphertext = await bcrypt.hash(plaintext, this.salt)

    return ciphertext
  }
}
