import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductsDto } from '../../dtos/create-product.dto';
import { CreateProductService } from './create-product.service';

@Controller('api/product')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  async execute(@Body() body: CreateProductsDto) {
    return await this.createProductService.execute(body);
  }
}
