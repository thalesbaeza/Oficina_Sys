import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { DimCustomerDto } from './dto/dim-customer.dto';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('customer')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('create-consumer')
  @ApiOperation({ summary: 'Create a new random client' })
  @ApiResponse({
    status: 201,
    description: 'A random client has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create() {
    return this.clientService.createRandomCustomerForService(); // Chama o método que cria o cliente aleatório
  }

  @Get()
  @ApiOperation({ summary: 'Get all clients' })
  @ApiResponse({ status: 200, description: 'List of all clients.' })
  async findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCustomerDto: DimCustomerDto,
  ) {
    return await this.clientService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a client by ID' })
  @ApiParam({ name: 'id', description: 'ID of the client to remove' })
  @ApiResponse({ status: 200, description: 'Client successfully removed.' })
  @ApiResponse({ status: 404, description: 'Client not found.' })
  async remove(@Param('id') id: number) {
    return this.clientService.remove(id);
  }
}
