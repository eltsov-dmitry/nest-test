import { MigrationInterface, QueryRunner } from 'typeorm';

export class mig1660020069605 implements MigrationInterface {
  name = 'mig1660020069605';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "test" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
  }
}
