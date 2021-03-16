import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSolution1615917303785 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solutions',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'source_code', type: 'text' },
          { name: 'description', type: 'text' },
          { name: 'stars', type: 'int', default: 0 },
          { name: 'user_id', type: 'uuid' },
          { name: 'problem_id', type: 'uuid' },
          { name: 'created_at', type: 'timestamp', default: 'now()' }
        ],
        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
          },
          {
            name: 'FKProblem',
            referencedTableName: 'problems',
            referencedColumnNames: ['id'],
            columnNames: ['problem_id'],
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('solutions')
  }
}
