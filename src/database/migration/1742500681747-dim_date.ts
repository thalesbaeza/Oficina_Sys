import { MigrationInterface, QueryRunner } from 'typeorm';

export class DimDate1742500681747 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
        CREATE TABLE dim_date (
            date_id SERIAL PRIMARY KEY,               -- Identificador único da data
            date DATE,                                -- Data completa
            day INT,                                  -- Dia do mês
            month INT,                                -- Mês
            year INT,                                 -- Ano
            quarter INT                               -- Trimestre (1, 2, 3, 4)
        );
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS dim_date;`);
  }
}
