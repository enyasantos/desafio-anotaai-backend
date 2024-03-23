import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const ProductsSchema = z.object({
  title: z.string({
    required_error: 'Price is required',
  }),
  owner: z.string({
    required_error: 'Owner is required',
  }),
  category: z.string({
    required_error: 'Price is required',
  }),
  price: z.number({
    required_error: 'Price is required',
  }),
  description: z.string({
    required_error: 'Price is required',
  }),
});

export class UpdateProductsDto extends createZodDto(ProductsSchema) {}
