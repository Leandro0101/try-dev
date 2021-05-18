import { IDecrypter } from '@data/protocols/criptograpy/decrypter'
import { ITokenGenerator } from '@data/protocols'
import jwt from 'jsonwebtoken'

export class JWTAdapter implements ITokenGenerator, IDecrypter {
  async generate (userId: string): Promise<string> {
    const token = jwt.sign({ userId }, 'EiOiJ0ZXN0ZSIsImlhdCI6MTYxOTMwOTIzMiwiZ', { expiresIn: 4000 })

    return token
  }

  async decrypt (value: string): Promise<string> {
    try {
      const tokenValue = Object(await jwt.verify(value, 'EiOiJ0ZXN0ZSIsImlhdCI6MTYxOTMwOTIzMiwiZ'))
      return tokenValue
    } catch (error) {
      return null
    }
  }
}
