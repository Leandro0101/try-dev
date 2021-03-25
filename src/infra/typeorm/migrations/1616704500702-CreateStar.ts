import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateStar1616704500702 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stars',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'value', type: 'int' },
          { name: 'userId', type: 'uuid' },
          { name: 'solutionId', type: 'uuid' },
          { name: 'createdAt', type: 'timestamp', default: 'now()' }
        ],
        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['userId'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
          },
          {
            name: 'FKSolution',
            referencedTableName: 'solutions',
            referencedColumnNames: ['id'],
            columnNames: ['solutionId'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stars')
  }
}
