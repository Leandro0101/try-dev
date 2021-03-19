import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddColumnStatusAtProblem1616178737432 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('problems', [new TableColumn({
      name: 'status',
      type: 'enum',
      enum: ['active', 'inactive', 'resolved'],
      enumName: 'statusEnum',
      // eslint-disable-next-line @typescript-eslint/quotes
      default: `'active'`
    })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('problems', 'status')
  }
}
