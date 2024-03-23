import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CategoriesSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  owner: z.string({
    required_error: 'Owner is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
});

export class UpdateCategoriesDto extends createZodDto(CategoriesSchema) {}
