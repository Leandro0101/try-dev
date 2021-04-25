import { IPayload, ITokenGenerator } from '@data/protocols'
import jwt from 'jsonwebtoken'

export class JWTAdapter implements ITokenGenerator {
  async generate (payload: IPayload): Promise<string> {
    const token = jwt.sign(payload, 'EiOiJ0ZXN0ZSIsImlhdCI6MTYxOTMwOTIzMiwiZ', { expiresIn: 30 })

    return token
  }
}
