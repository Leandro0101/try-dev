import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class RemoveStarsAtSolutions1616705776353 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "solutions" DROP COLUMN "stars"')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('solutions', [new TableColumn({
      name: 'stars',
      type: 'int',
      default: 0
    })])
  }
}
