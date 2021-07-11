import { createConnection, getConnection } from 'typeorm'

export const connect = async (): Promise<void> => {
  await createConnection()
}

export const disconnect = async (): Promise<void> => {
  await getConnection().close()
}
