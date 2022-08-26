import { MigrationInterface, QueryRunner } from "typeorm";

export class mig1661513450979 implements MigrationInterface {
    name = 'mig1661513450979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "nameMale"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "nameFemale"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "name_male" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ADD "name_female" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "name_female"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "name_male"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "nameFemale" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ADD "nameMale" character varying NOT NULL`);
    }

}
