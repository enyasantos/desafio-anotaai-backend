import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateProductsDto } from '../../dtos/update-product.dto';
import { UpdateProductService } from './update-product.service';

@Controller('api/product')
export class UpdateProductController {
  constructor(private readonly updateProductService: UpdateProductService) {}

  @Put(':id')
  async execute(@Body() body: UpdateProductsDto, @Param('id') id: string) {
    return await this.updateProductService.execute(body, id);
  }
}
