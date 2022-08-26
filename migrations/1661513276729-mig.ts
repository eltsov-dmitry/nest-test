import { MigrationInterface, QueryRunner } from "typeorm";

export class mig1661513276729 implements MigrationInterface {
    name = 'mig1661513276729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "block-top" ("id" SERIAL NOT NULL, "image" character varying NOT NULL, "projectId" integer, CONSTRAINT "REL_36ec9df13552abf6f9bee77dbf" UNIQUE ("projectId"), CONSTRAINT "PK_e633243ddde28a3aa95295b0266" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT 'Мой проект', "nameMale" character varying NOT NULL, "nameFemale" character varying NOT NULL, "userId" integer, "projectId" integer, CONSTRAINT "REL_a9fd7b30180395df453f1373c2" UNIQUE ("projectId"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "block-top" ADD CONSTRAINT "FK_36ec9df13552abf6f9bee77dbf5" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_a9fd7b30180395df453f1373c28" FOREIGN KEY ("projectId") REFERENCES "block-top"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_a9fd7b30180395df453f1373c28"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`ALTER TABLE "block-top" DROP CONSTRAINT "FK_36ec9df13552abf6f9bee77dbf5"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "block-top"`);
    }

}
