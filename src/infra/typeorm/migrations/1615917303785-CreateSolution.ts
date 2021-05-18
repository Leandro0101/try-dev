import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSolution1615917303785 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solutions',
        columns: [{
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'sourceCode',
          type: 'text'
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'stars',
          type: 'int',
          default: 0
        },
        {
          name: 'userId',
          type: 'varchar'
        },
        {
          name: 'problemId',
          type: 'varchar'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        }],
        foreignKeys: [{
          name: 'FKUser',
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE'
        },
        {
          name: 'FKProblem',
          referencedTableName: 'problems',
          referencedColumnNames: ['id'],
          columnNames: ['problemId'],
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('solutions')
  }
}
