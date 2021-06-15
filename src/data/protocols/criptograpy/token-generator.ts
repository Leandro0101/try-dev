export interface ITokenData {
  userId: string
  expiration: number
  key: string
}

export interface ITokenGenerator {
  generate: (tokenData: ITokenData) => Promise<string>
}
