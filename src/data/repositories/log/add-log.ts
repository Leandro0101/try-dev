export interface IAddLogErrorRepository {
  execute: (stack: string) => Promise<void>
}
