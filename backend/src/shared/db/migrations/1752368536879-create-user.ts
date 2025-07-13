import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1752368536879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'username',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'is_active',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: false,
          },
        ],
      }),
    );

    // Tạo index cho email để tìm kiếm nhanh hơn
    // await queryRunner.query(`
    //         CREATE INDEX "IDX_users_email" ON "users" ("email")
    //     `);

    // // Tạo index cho isActive
    // await queryRunner.query(`
    //         CREATE INDEX "IDX_users_isActive" ON "users" ("isActive")
    //     `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Xóa indexes trước
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_users_isActive"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_users_email"`);

    // Xóa table
    await queryRunner.query(`DROP TABLE IF EXISTS "users"`);
  }
}
