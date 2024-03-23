import { Controller, Get } from '@nestjs/common';
import { GellAllCategoriesService } from './get-all-categories.service';

@Controller('api/category')
export class GellAllCategoriesController {
  constructor(
    private readonly gellAllCategoriesService: GellAllCategoriesService,
  ) {}

  @Get()
  async execute() {
    return await this.gellAllCategoriesService.execute();
  }
}
