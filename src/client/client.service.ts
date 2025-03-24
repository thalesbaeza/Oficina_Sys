import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DimCustomerDto } from './dto/dim-customer.dto';
import { DimCustomer } from './entities/dim-customer.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(DimCustomer)
    private readonly dimCustomerRepository: Repository<DimCustomer>,
  ) {}

  createRandomUser() {
    return {
      customer_name: faker.person.firstName() + ' ' + faker.person.lastName(),
      customer_email: faker.internet.email(),
      customer_address: faker.location.streetAddress(),
    };
  }

  async createRandomCustomerForService(): Promise<DimCustomer> {
    const randomCustomer = this.createRandomUser();
    const customer = this.dimCustomerRepository.create(randomCustomer);
    return await this.dimCustomerRepository.save(customer);
  }

  async create(createCustomerDto: DimCustomerDto): Promise<DimCustomer> {
    const customer = this.dimCustomerRepository.create(createCustomerDto);
    return await this.dimCustomerRepository.save(customer);
  }

  async findAll(): Promise<DimCustomer[]> {
    return this.dimCustomerRepository.find();
  }

  async findOne(id: number): Promise<DimCustomer> {
    return this.dimCustomerRepository.findOne({ where: { customer_id: id } });
  }

  async update(
    id: number,
    dimCustomerDto: DimCustomerDto,
  ): Promise<DimCustomer> {
    const customer = await this.dimCustomerRepository.findOne({
      where: { customer_id: id },
    });

    if (!customer) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    Object.assign(customer, dimCustomerDto);
    return this.dimCustomerRepository.save(customer);
  }

  async remove(id: number): Promise<DimCustomer> {
    const customer = await this.dimCustomerRepository.findOne({
      where: { customer_id: id },
    });

    if (!customer) {
      throw new Error(`Customer with ID ${id} not found`);
    }

    return this.dimCustomerRepository.remove(customer);
  }
}
