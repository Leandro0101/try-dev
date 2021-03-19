import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddColumnStatusAtUser1616162306151 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [new TableColumn({
      name: 'status',
      type: 'enum',
      enum: ['active', 'inactive'],
      enumName: 'statusEnum',
      // eslint-disable-next-line @typescript-eslint/quotes
      default: `'active'`
    })])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'status')
  }
}
