// src/cash-flow/cash-flow.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CashFlowService } from './cash-flow.service';
import {
  DimCarModelDto,
  DimDateDto,
  DimTransactionTypeDto,
  FactTransactionDto,
} from './dto';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('cash-flow')
export class CashFlowController {
  constructor(private readonly cashFlowService: CashFlowService) {}

  // DimCarModel Routes

  @Post('dim-car-model')
  @ApiOperation({ summary: 'Create a new DimCarModel' })
  @ApiResponse({ status: 201, description: 'DimCarModel created successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createDimCarModel(@Body() dimCarModelDto: DimCarModelDto) {
    return this.cashFlowService.createDimCarMode(dimCarModelDto);
  }

  @Get('dim-car-models')
  @ApiOperation({ summary: 'Get all DimCarModels' })
  @ApiResponse({ status: 200, description: 'List of DimCarModels' })
  async findAllDimCarModels() {
    return this.cashFlowService.findAllDimCarMode();
  }

  @Get('dim-car-model/:id')
  @ApiOperation({ summary: 'Get a DimCarModel by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimCarModel to find' })
  @ApiResponse({ status: 200, description: 'DimCarModel found successfully' })
  @ApiResponse({ status: 404, description: 'DimCarModel not found' })
  async findOneDimCarModel(@Param('id') id: number) {
    return this.cashFlowService.findOneDimCarMode(id);
  }

  @Put('dim-car-model/:id')
  @ApiOperation({ summary: 'Update a DimCarModel by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimCarModel to update' })
  @ApiResponse({ status: 200, description: 'DimCarModel updated successfully' })
  @ApiResponse({ status: 404, description: 'DimCarModel not found' })
  async updateDimCarModel(
    @Param('id') id: number,
    @Body() dimCarModelDto: DimCarModelDto,
  ) {
    return this.cashFlowService.updateDimCarMode(id, dimCarModelDto);
  }

  @Delete('dim-car-model/:id')
  @ApiOperation({ summary: 'Delete a DimCarModel by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimCarModel to delete' })
  @ApiResponse({ status: 200, description: 'DimCarModel deleted successfully' })
  @ApiResponse({ status: 404, description: 'DimCarModel not found' })
  async removeDimCarModel(@Param('id') id: number) {
    return this.cashFlowService.removeDimCarMode(id);
  }

  // DimDate Routes

  @Post('dim-date')
  @ApiOperation({ summary: 'Create a new DimDate' })
  @ApiResponse({ status: 201, description: 'DimDate created successfully' })
  async createDimDate(@Body() dimDateDto: DimDateDto) {
    return this.cashFlowService.createdimDate(dimDateDto);
  }

  @Get('dim-dates')
  @ApiOperation({ summary: 'Get all DimDates' })
  @ApiResponse({ status: 200, description: 'List of DimDates' })
  async findAllDimDates() {
    return this.cashFlowService.findAlldimDate();
  }

  @Get('dim-date/:id')
  @ApiOperation({ summary: 'Get a DimDate by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimDate to find' })
  @ApiResponse({ status: 200, description: 'DimDate found successfully' })
  @ApiResponse({ status: 404, description: 'DimDate not found' })
  async findOneDimDate(@Param('id') id: number) {
    return this.cashFlowService.findOnedimDate(id);
  }

  @Put('dim-date/:id')
  @ApiOperation({ summary: 'Update a DimDate by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimDate to update' })
  @ApiResponse({ status: 200, description: 'DimDate updated successfully' })
  @ApiResponse({ status: 404, description: 'DimDate not found' })
  async updateDimDate(@Param('id') id: number, @Body() dimDateDto: DimDateDto) {
    return this.cashFlowService.updatedimDate(id, dimDateDto);
  }

  @Delete('dim-date/:id')
  @ApiOperation({ summary: 'Delete a DimDate by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimDate to delete' })
  @ApiResponse({ status: 200, description: 'DimDate deleted successfully' })
  @ApiResponse({ status: 404, description: 'DimDate not found' })
  async removeDimDate(@Param('id') id: number) {
    return this.cashFlowService.removedimDate(id);
  }

  // DimTransactionType Routes

  @Post('dim-transaction-type')
  @ApiOperation({ summary: 'Create a new DimTransactionType' })
  @ApiResponse({
    status: 201,
    description: 'DimTransactionType created successfully',
  })
  async createDimTransactionType(
    @Body() dimTransactionTypeDto: DimTransactionTypeDto,
  ) {
    return this.cashFlowService.createDimTransactionType(dimTransactionTypeDto);
  }

  @Get('dim-transaction-types')
  @ApiOperation({ summary: 'Get all DimTransactionTypes' })
  @ApiResponse({ status: 200, description: 'List of DimTransactionTypes' })
  async findAllDimTransactionTypes() {
    return this.cashFlowService.findAllDimTransactionType();
  }

  @Get('dim-transaction-type/:id')
  @ApiOperation({ summary: 'Get a DimTransactionType by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimTransactionType to find' })
  @ApiResponse({
    status: 200,
    description: 'DimTransactionType found successfully',
  })
  @ApiResponse({ status: 404, description: 'DimTransactionType not found' })
  async findOneDimTransactionType(@Param('id') id: number) {
    return this.cashFlowService.findOneDimTransactionType(id);
  }

  @Put('dim-transaction-type/:id')
  @ApiOperation({ summary: 'Update a DimTransactionType by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the DimTransactionType to update',
  })
  @ApiResponse({
    status: 200,
    description: 'DimTransactionType updated successfully',
  })
  @ApiResponse({ status: 404, description: 'DimTransactionType not found' })
  async updateDimTransactionType(
    @Param('id') id: number,
    @Body() dimTransactionTypeDto: DimTransactionTypeDto,
  ) {
    return this.cashFlowService.updateDimTransactionType(
      id,
      dimTransactionTypeDto,
    );
  }

  @Delete('dim-transaction-type/:id')
  @ApiOperation({ summary: 'Delete a DimTransactionType by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the DimTransactionType to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'DimTransactionType deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'DimTransactionType not found' })
  async removeDimTransactionType(@Param('id') id: number) {
    return this.cashFlowService.removeDimTransactionType(id);
  }

  // FactTransaction Routes

  @Post('fact-transaction')
  @ApiOperation({ summary: 'Create a new FactTransaction' })
  @ApiResponse({
    status: 201,
    description: 'FactTransaction created successfully',
  })
  async createFactTransaction(@Body() factTransactionDto: FactTransactionDto) {
    return this.cashFlowService.createFactTransaction(factTransactionDto);
  }

  @Get('fact-transactions')
  @ApiOperation({ summary: 'Get all FactTransactions' })
  @ApiResponse({ status: 200, description: 'List of FactTransactions' })
  async findAllFactTransactions() {
    return this.cashFlowService.findAllFactTransaction();
  }

  @Get('fact-transaction/:id')
  @ApiOperation({ summary: 'Get a FactTransaction by ID' })
  @ApiParam({ name: 'id', description: 'ID of the FactTransaction to find' })
  @ApiResponse({
    status: 200,
    description: 'FactTransaction found successfully',
  })
  @ApiResponse({ status: 404, description: 'FactTransaction not found' })
  async findOneFactTransaction(@Param('id') id: number) {
    return this.cashFlowService.findOneFactTransaction(id);
  }

  @Put('fact-transaction/:id')
  @ApiOperation({ summary: 'Update a FactTransaction by ID' })
  @ApiParam({ name: 'id', description: 'ID of the FactTransaction to update' })
  @ApiResponse({
    status: 200,
    description: 'FactTransaction updated successfully',
  })
  @ApiResponse({ status: 404, description: 'FactTransaction not found' })
  async updateFactTransaction(
    @Param('id') id: number,
    @Body() factTransactionDto: FactTransactionDto,
  ) {
    return this.cashFlowService.updateFactTransaction(id, factTransactionDto);
  }

  @Delete('fact-transaction/:id')
  @ApiOperation({ summary: 'Delete a FactTransaction by ID' })
  @ApiParam({ name: 'id', description: 'ID of the FactTransaction to delete' })
  @ApiResponse({
    status: 200,
    description: 'FactTransaction deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'FactTransaction not found' })
  async removeFactTransaction(@Param('id') id: number) {
    return this.cashFlowService.removeFactTransaction(id);
  }

  @Post('teste')
  async teste(@Body() body: any) {
    await this.cashFlowService.sendStockUpdate(body);
  }
}
