import { IDecrypter } from '@data/protocols/criptograpy/decrypter'
import { ITokenData, ITokenGenerator } from '@data/protocols'
import jwt from 'jsonwebtoken'

export class JWTAdapter implements ITokenGenerator, IDecrypter {
  async generate (tokenData: ITokenData): Promise<string> {
    const { userId, userEmail, key, expiration } = tokenData
    console.log({ key })
    const token = jwt.sign({ userId, userEmail }, key, { expiresIn: expiration })
    return token
  }

  async decrypt (value: string, key: string): Promise<string> {
    try {
      const tokenValue = Object(await jwt.verify(value, key))
      return tokenValue
    } catch (error) {
      return null
    }
  }
}
