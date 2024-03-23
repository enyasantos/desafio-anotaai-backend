import { Controller, Get } from '@nestjs/common';
import { GetAllProductsService } from './get-all-products.service';

@Controller('api/product')
export class GetAllProductController {
  constructor(private readonly getAllProductsService: GetAllProductsService) {}

  @Get()
  async execute() {
    return await this.getAllProductsService.execute();
  }
}
