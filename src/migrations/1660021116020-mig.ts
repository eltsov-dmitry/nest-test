import { MigrationInterface, QueryRunner } from "typeorm";

export class mig1660021116020 implements MigrationInterface {
    name = 'mig1660021116020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test" character varying NOT NULL`);
    }

}
