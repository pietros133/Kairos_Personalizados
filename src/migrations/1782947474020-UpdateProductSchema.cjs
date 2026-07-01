/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class UpdateProductSchema1782947474020 {
    name = 'UpdateProductSchema1782947474020'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`enderecos\` DROP FOREIGN KEY \`FK_4c77d2cf51503b91ffe306553f3\``);
        await queryRunner.query(`ALTER TABLE \`enderecos\` CHANGE \`complemento\` \`complemento\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`enderecos\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`code\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`code\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD UNIQUE INDEX \`IDX_7cfc24d6c24f0ec91294003d6b\` (\`code\`)`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`size\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`size\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_images\` DROP FOREIGN KEY \`FK_b367708bf720c8dd62fc6833161\``);
        await queryRunner.query(`ALTER TABLE \`product_images\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`enderecos\` ADD CONSTRAINT \`FK_4c77d2cf51503b91ffe306553f3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_images\` ADD CONSTRAINT \`FK_b367708bf720c8dd62fc6833161\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`product_images\` DROP FOREIGN KEY \`FK_b367708bf720c8dd62fc6833161\``);
        await queryRunner.query(`ALTER TABLE \`enderecos\` DROP FOREIGN KEY \`FK_4c77d2cf51503b91ffe306553f3\``);
        await queryRunner.query(`ALTER TABLE \`product_images\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product_images\` ADD CONSTRAINT \`FK_b367708bf720c8dd62fc6833161\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` double(22) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`size\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`size\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP INDEX \`IDX_7cfc24d6c24f0ec91294003d6b\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`code\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`code\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`enderecos\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`enderecos\` CHANGE \`complemento\` \`complemento\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`enderecos\` ADD CONSTRAINT \`FK_4c77d2cf51503b91ffe306553f3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
