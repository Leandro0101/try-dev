import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addStatusPending1623673993231 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "status"')
    await queryRunner.query("CREATE TYPE statusUser AS ENUM ('active', 'inactive', 'pending')")
    await queryRunner.addColumns('users', [new TableColumn({
      name: 'status',
      type: 'statusUser',
      // eslint-disable-next-line @typescript-eslint/quotes
      default: `'pending'`
    })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "status"')
    await queryRunner.query('DROP TYPE statusUser')
    await queryRunner.addColumns('users', [new TableColumn({
      name: 'status',
      type: 'enum',
      enum: ['active', 'inactive'],
      enumName: 'statusEnum',
      // eslint-disable-next-line @typescript-eslint/quotes
      default: `'active'`
    })])
  }
}
