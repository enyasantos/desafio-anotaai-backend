import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/modules/products/entities/product.entity';
import { ProductsRepository } from 'src/modules/products/repositories/product.repository';
import {
  MongooseProduct,
  MongooseProductMapper,
} from '../mappers/mongoose.product.mapper';

@Injectable()
export class MongooseProductsRepository implements ProductsRepository {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<MongooseProduct>,
  ) {}

  async index(): Promise<Product[]> {
    const categories = await this.productModel.find().populate('category');
    return categories.map(MongooseProductMapper.toDomain);
  }

  async find(id: string): Promise<Product> {
    const category = await this.productModel.findById(id).populate('category');
    return category && MongooseProductMapper.toDomain(category);
  }

  async create(item: Product): Promise<Product> {
    const raw = MongooseProductMapper.toMongoose(item);
    const category = await this.productModel.create(raw);
    return MongooseProductMapper.toDomain(category);
  }

  async update(id: string, item: Product): Promise<Product> {
    const raw = MongooseProductMapper.toMongoose(item);
    const category = await this.productModel.findOneAndUpdate(
      { _id: id },
      {
        ...raw,
      },
      { new: true },
    );
    return MongooseProductMapper.toDomain(category);
  }

  async upsert(id: string, item: Product): Promise<Product> {
    const raw = MongooseProductMapper.toMongoose(item);
    const category = await this.productModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        ...raw,
      },
      { new: true },
    );
    return MongooseProductMapper.toDomain(category);
  }

  async delete(id: string): Promise<Product> {
    const category = await this.productModel.findOneAndDelete({ _id: id });
    return MongooseProductMapper.toDomain(category);
  }
}
