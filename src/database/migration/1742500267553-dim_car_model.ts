import { MigrationInterface, QueryRunner } from 'typeorm';

export class dim_car_model1742500267553 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE IF NOT EXISTS dim_car_model (
            car_model_id SERIAL PRIMARY KEY,          -- Identificador único do modelo de carro
            car_model_name VARCHAR(100),               -- Nome do modelo do carro
            car_brand VARCHAR(50),                     -- Marca do carro
            car_year INT                               -- Ano de fabricação do carro
        );
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS dim_car_model;`);
  }
}
