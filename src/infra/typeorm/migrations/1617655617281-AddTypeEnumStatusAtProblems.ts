import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddTypeEnumStatusAtProblems1617655617281 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "problems" DROP COLUMN "status"')
    await queryRunner.query("CREATE TYPE statusProblem AS ENUM ('active', 'inactive', 'resolved')")
    await queryRunner.addColumns('problems', [new TableColumn({
      name: 'status',
      type: 'statusProblem',
      // eslint-disable-next-line @typescript-eslint/quotes
      default: `'active'`
    })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('problems', 'status')
    await queryRunner.query('DROP TYPE statusProblem')
    await queryRunner.addColumns('problems', [new TableColumn({
      name: 'status',
      type: 'enum',
      enum: ['active', 'inactive', 'resolved'],
      enumName: 'statusEnum',
      // eslint-disable-next-line @typescript-eslint/quotes
      default: `'active'`
    })])
  }
}
