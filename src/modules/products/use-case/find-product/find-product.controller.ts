import { Controller, Get, Param } from '@nestjs/common';
import { FindProductService } from './find-product.service';

@Controller('api/product')
export class FindProductController {
  constructor(private readonly findProductService: FindProductService) {}

  @Get(':id')
  async execute(@Param('id') id: string) {
    return await this.findProductService.execute(id);
  }
}
