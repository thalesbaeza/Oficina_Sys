import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RabbitMqService } from 'src/shared/rabbitmq/rabbitmq.service';
import { Repository } from 'typeorm';
import {
  DimCarModelDto,
  DimDateDto,
  DimTransactionTypeDto,
  FactTransactionDto,
} from './dto';
import {
  DimCarModel,
  DimDate,
  DimTransactionType,
  FactTransaction,
} from './entities';

@Injectable()
export class CashFlowService {
  constructor(
    @InjectRepository(DimCarModel)
    private readonly dimCarModelRepository: Repository<DimCarModel>,

    @InjectRepository(DimDate)
    private readonly dimDateRepository: Repository<DimDate>,

    @InjectRepository(DimTransactionType)
    private readonly dimTransactionTypeRepository: Repository<DimTransactionType>,

    @InjectRepository(FactTransaction)
    private readonly factTransactionRepository: Repository<FactTransaction>,

    private readonly rabbiqMqService: RabbitMqService,
  ) {}

  async sendStockUpdate(data: any): Promise<any> {
    return this.rabbiqMqService.publish('mechanic', 'teste', data);
  }

  //DimCarModelDto
  async createDimCarMode(dimCarModelDto: DimCarModelDto): Promise<DimCarModel> {
    const customer = this.dimCarModelRepository.create(dimCarModelDto);
    return await this.dimCarModelRepository.save(customer);
  }

  async findAllDimCarMode(): Promise<DimCarModel[]> {
    return this.dimCarModelRepository.find();
  }

  async findOneDimCarMode(id: number): Promise<DimCarModel> {
    return this.dimCarModelRepository.findOne({ where: { car_model_id: id } });
  }

  async updateDimCarMode(
    id: number,
    dimCarModelDto: DimCarModelDto,
  ): Promise<DimCarModel> {
    const car_model = await this.dimCarModelRepository.findOne({
      where: { car_model_id: id },
    });

    if (!car_model) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    Object.assign(car_model, dimCarModelDto);
    return this.dimCarModelRepository.save(car_model);
  }

  async removeDimCarMode(id: number): Promise<DimCarModel> {
    const car_model = await this.dimCarModelRepository.findOne({
      where: { car_model_id: id },
    });

    if (!car_model) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    return this.dimCarModelRepository.remove(car_model);
  }

  // Date
  async createdimDate(dimDateDto: DimDateDto): Promise<DimDate> {
    const date = this.dimDateRepository.create(dimDateDto);
    return await this.dimDateRepository.save(date);
  }

  async findAlldimDate(): Promise<DimDate[]> {
    return this.dimDateRepository.find();
  }

  async findOnedimDate(id: number): Promise<DimDate> {
    return this.dimDateRepository.findOne({ where: { date_id: id } });
  }

  async updatedimDate(id: number, dimDateDto: DimDateDto): Promise<DimDate> {
    const dateId = await this.dimDateRepository.findOne({
      where: { date_id: id },
    });

    if (!dateId) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    Object.assign(dateId, dimDateDto);
    return this.dimDateRepository.save(dateId);
  }

  async removedimDate(id: number): Promise<DimDate> {
    const dateId = await this.dimDateRepository.findOne({
      where: { date_id: id },
    });

    if (!dateId) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    return this.dimDateRepository.remove(dateId);
  }
  // TransactionType
  async createDimTransactionType(
    dimTransactionTypeDto: DimTransactionTypeDto,
  ): Promise<DimTransactionType> {
    const TransactionType = this.dimTransactionTypeRepository.create(
      dimTransactionTypeDto,
    );
    return await this.dimTransactionTypeRepository.save(TransactionType);
  }

  async findAllDimTransactionType(): Promise<DimTransactionType[]> {
    return this.dimTransactionTypeRepository.find();
  }

  async findOneDimTransactionType(id: number): Promise<DimTransactionType> {
    return this.dimTransactionTypeRepository.findOne({
      where: { transaction_type_id: id },
    });
  }

  async updateDimTransactionType(
    id: number,
    dimTransactionTypeDto: DimTransactionTypeDto,
  ): Promise<DimTransactionType> {
    const transactionType = await this.dimTransactionTypeRepository.findOne({
      where: { transaction_type_id: id },
    });

    if (!transactionType) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    Object.assign(transactionType, dimTransactionTypeDto);
    return this.dimTransactionTypeRepository.save(transactionType);
  }

  async removeDimTransactionType(id: number): Promise<DimTransactionType> {
    const transactionType = await this.dimTransactionTypeRepository.findOne({
      where: { transaction_type_id: id },
    });

    if (!transactionType) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    return this.dimTransactionTypeRepository.remove(transactionType);
  }

  // FactTransaction
  async createFactTransaction(
    factTransactionDto: FactTransactionDto,
  ): Promise<FactTransaction> {
    const transaction_id =
      this.factTransactionRepository.create(factTransactionDto);
    return await this.factTransactionRepository.save(transaction_id);
  }

  async findAllFactTransaction(): Promise<FactTransaction[]> {
    return this.factTransactionRepository.find();
  }

  async findOneFactTransaction(id: number): Promise<FactTransaction> {
    return this.factTransactionRepository.findOne({
      where: { transaction_id: id },
    });
  }

  async updateFactTransaction(
    id: number,
    factTransactionDto: FactTransactionDto,
  ): Promise<FactTransaction> {
    const transactionId = await this.factTransactionRepository.findOne({
      where: { transaction_id: id },
    });

    if (!transactionId) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    Object.assign(transactionId, factTransactionDto);
    return this.factTransactionRepository.save(transactionId);
  }

  async removeFactTransaction(id: number): Promise<FactTransaction> {
    const transactionId = await this.factTransactionRepository.findOne({
      where: { transaction_id: id },
    });

    if (!transactionId) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    return this.factTransactionRepository.remove(transactionId);
  }
}
