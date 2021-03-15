import { createConnection, getConnection } from 'typeorm'

export const connect = async (): Promise<void> => {
  await createConnection({
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: 'root',
    password: 'toor123',
    database: 'trydev'
  })
}

export const disconnect = async (): Promise<void> => {
  await getConnection().close()
}
