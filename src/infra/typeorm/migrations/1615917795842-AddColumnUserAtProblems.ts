import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AddColumnUserAtProblems1615917795842 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('problems', [new TableColumn({
      name: 'userId',
      type: 'uuid'
    })])

    await queryRunner.createForeignKey('problems', new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'RESTRICT'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "problems" DROP COLUMN "userId"')
  }
}
