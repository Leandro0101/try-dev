export interface IQueueSystem {
  add: <T>(data: T) => Promise<void>
  process: () => Promise<void>
}
