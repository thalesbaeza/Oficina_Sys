import { MigrationInterface, QueryRunner } from 'typeorm';

export class FactTransaction1742500753821 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE IF NOT EXISTS fact_transaction (
            transaction_id SERIAL PRIMARY KEY,         -- Identificador único da transação
            car_model_id INT,                         -- Chave estrangeira para o modelo do carro
            customer_id INT,                          -- Chave estrangeira para o cliente
            transaction_date_id INT,                  -- Chave estrangeira para a tabela de data
            transaction_type_id INT,                  -- Chave estrangeira para o tipo de transação (compra, venda, etc.)
            quantity INT,                             -- Quantidade de peças ou serviços envolvidos
            transaction_value DECIMAL(10, 2),         -- Valor da transação
            profit DECIMAL(10, 2),                    -- Lucro gerado pela transação
            FOREIGN KEY (car_model_id) REFERENCES dim_car_model(car_model_id),
            FOREIGN KEY (customer_id) REFERENCES dim_customer(customer_id),
            FOREIGN KEY (transaction_date_id) REFERENCES dim_date(date_id),
            FOREIGN KEY (transaction_type_id) REFERENCES dim_transaction_type(transaction_type_id)
        );
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS fact_transaction;`);
  }
}
