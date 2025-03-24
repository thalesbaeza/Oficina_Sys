import { MigrationInterface, QueryRunner } from 'typeorm';

export class DimTransactionType1742500613678 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
    CREATE TABLE dim_transaction_type (
        transaction_type_id SERIAL PRIMARY KEY,   -- Identificador único do tipo de transação
        transaction_type_name VARCHAR(50),        -- Nome do tipo de transação (ex: Compra, Venda, Retirada)
        description TEXT                          -- Descrição detalhada do tipo de transação
    );    
    `,
    );

    await queryRunner.query(
      `
          INSERT INTO dim_transaction_type (transaction_type_name, description) VALUES
              ('purchase_receipt', 'Recebimento de compra'),
              ('return_from_customer', 'Devolução de cliente'),
              ('transfer_in', 'Transferência de entrada'),
              ('production_receipt', 'Recebimento de produção'),
              ('adjustment_in', 'Ajuste de entrada'),
              ('sales_issue', 'Emissão de venda'),
              ('transfer_out', 'Transferência de saída'),
              ('consumption', 'Consumo'),
              ('return_to_vendor', 'Devolução para fornecedor'),
              ('adjustment_out', 'Ajuste de saída'),
              ('reversal_purchase', 'Reversão de compra'),
              ('reversal_sale', 'Reversão de venda'),
              ('inventory_correction', 'Correção de inventário'),
              ('reservation', 'Reserva'),
              ('unreservation', 'Cancelamento de reserva'),
              ('damage_write_off', 'Baixa por dano'),
              ('experimental_use', 'Uso experimental'),
              ('sample_issue', 'Emissão de amostra');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS dim_transaction_type;`);
  }
}
