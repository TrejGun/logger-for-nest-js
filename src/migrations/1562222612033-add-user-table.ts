import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddUserTable1562222612033 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: "test.user",
      columns: [
        {
          name: "id",
          type: "serial",
          isPrimary: true,
        },
        {
          name: "email",
          type: "varchar",
        },
        {
          name: "password",
          type: "varchar",
        },
      ],
    });

    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("test.user");
  }
}
