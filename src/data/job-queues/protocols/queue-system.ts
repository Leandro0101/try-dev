export interface IQueueSystem {
  add: <T>(data: T, key: string) => Promise<void>
  process: (jobs: Map<String, any>) => Promise<void>
}
