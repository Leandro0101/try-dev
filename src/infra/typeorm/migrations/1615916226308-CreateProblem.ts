import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateProblem1615916226308 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'problems',
        columns: [{
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'title',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('problems')
  }
}
