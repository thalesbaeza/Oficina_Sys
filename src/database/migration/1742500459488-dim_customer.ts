import { MigrationInterface, QueryRunner } from 'typeorm';

export class DimCustomer1742500459488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
        CREATE TABLE dim_customer (
            customer_id SERIAL PRIMARY KEY,           -- Identificador único do cliente
            customer_name VARCHAR(100),               -- Nome do cliente
            customer_phone VARCHAR(20),               -- Telefone do cliente
            customer_email VARCHAR(100),              -- Email do cliente
            customer_address VARCHAR(255)             -- Endereço do cliente
        );
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS dim_customer;`);
  }
}
