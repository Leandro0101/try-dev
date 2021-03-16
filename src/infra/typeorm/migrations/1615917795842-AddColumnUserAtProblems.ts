import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AddColumnUserAtProblems1615917795842 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('problems', [new TableColumn({
      name: 'user_id',
      type: 'uuid'
    })])

    await queryRunner.createForeignKey('problems', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'RESTRICT'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "problems" DROP CONSTRAINT "user_id"')
  }
}
