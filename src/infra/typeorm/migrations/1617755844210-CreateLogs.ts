import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateLogs1617755844210 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'logs',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'stack', type: 'uuid' },
          { name: 'createdAt', type: 'timestamp', default: 'now()' }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('logs')
  }
}
