import { IEncrypter } from '@/src/data/protocols/criptograpy/encrypter'
import { IHashComparer } from '@/src/data/protocols/criptograpy/hash-comparer'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements IEncrypter, IHashComparer {
  constructor (private readonly salt: number) {}

  async compare (plaintext: string, ciphertext: string): Promise<boolean> {
    return null
  }

  async encrypt (plaintext: string): Promise<string> {
    const ciphertext = await bcrypt.hash(plaintext, this.salt)

    return ciphertext
  }
}
