export interface ITokenData {
  userEmail?: string
  userId?: string
  expiration: number
  key: string
}

export interface ITokenGenerator {
  generate: (tokenData: ITokenData) => Promise<string>
}
