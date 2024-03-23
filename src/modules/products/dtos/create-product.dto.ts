import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { isMongoUUID } from 'src/shared/handler/validate/mongo-uuid.validation';

const ProductsSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  owner: z.string({
    required_error: 'Owner is required',
  }),
  category: z
    .string()
    .refine(isMongoUUID, { message: 'Category must be a valid MongoDB UUID' }),
  price: z.number({
    required_error: 'Price is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
});

export class CreateProductsDto extends createZodDto(ProductsSchema) {}
