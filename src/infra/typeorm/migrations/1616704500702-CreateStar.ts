import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateStar1616704500702 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stars',
        columns: [{
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'value',
          type: 'int'
        },
        {
          name: 'userId',
          type: 'varchar'
        },
        {
          name: 'solutionId',
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
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        {
          name: 'FKSolution',
          referencedTableName: 'solutions',
          referencedColumnNames: ['id'],
          columnNames: ['solutionId'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stars')
  }
}
