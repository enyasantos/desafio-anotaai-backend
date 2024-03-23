import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument, now } from 'mongoose';
import { Category } from './category.schema';

export type InvoiceDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  price: number;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    required: true,
  })
  category: Category;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
