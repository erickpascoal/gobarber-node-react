import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class alterProviderFiledToProviderId1597612944378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointment', 'provider');

        await queryRunner.addColumn('appointment', new TableColumn({
            name: 'provider_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('appointment', new TableForeignKey({
            name: 'fk_appointment_user_provider',
            columnNames: ['provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appointment', 'fk_appointment_user_provider');

        await queryRunner.dropColumn('appointment', 'provider_id');

        await queryRunner.addColumn('appointment', new TableColumn({
            name: 'provider',
            type: 'varchar'
        }));
    }

}
