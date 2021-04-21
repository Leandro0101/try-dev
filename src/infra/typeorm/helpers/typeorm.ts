import { createConnection, getConnection, QueryRunner } from 'typeorm'

export const connect = async (): Promise<void> => {
  await createConnection()
}

export const disconnect = async (): Promise<void> => {
  await getConnection().close()
}

export const getQueryRunner = (): QueryRunner => {
  const connection = getConnection()
  const queryRunner = connection.createQueryRunner()

  return queryRunner
}
