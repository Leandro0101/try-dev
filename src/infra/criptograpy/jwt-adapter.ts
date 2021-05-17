import { IDecrypter } from '@data/protocols/criptograpy/decrypter'
import { IPayload, ITokenGenerator } from '@data/protocols'
import jwt from 'jsonwebtoken'

export class JWTAdapter implements ITokenGenerator, IDecrypter {
  async generate (payload: IPayload): Promise<string> {
    const token = jwt.sign(payload, 'EiOiJ0ZXN0ZSIsImlhdCI6MTYxOTMwOTIzMiwiZ', { expiresIn: 30 })

    return token
  }

  async decrypt (value: string): Promise<IPayload> {
    try {
      const { userId } = Object(await jwt.verify(value, 'EiOiJ0ZXN0ZSIsImlhdCI6MTYxOTMwOTIzMiwiZ'))
      return userId
    } catch (error) {
      return null
    }
  }
}
