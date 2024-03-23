import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteProductService } from './delete-product.service';

@Controller('api/product')
export class DeleteProductController {
  constructor(private readonly deleteProductService: DeleteProductService) {}

  @Delete(':id')
  async execute(@Param('id') id: string) {
    return await this.deleteProductService.execute(id);
  }
}
