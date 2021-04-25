export interface IPayload {
  userId: string
  timeExpiration: number
}

export interface ITokenGenerator {
  generate: (payload: IPayload) => Promise<string>
}
