import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/modules/categories/entities/category.entity';
import { CategoriesRepository } from 'src/modules/categories/repositories/category.repository';
import {
  MongooseCategory,
  MongooseCategoryMapper,
} from '../mappers/mongoose.categories.mapper';

@Injectable()
export class MongooseCategoriesRepository implements CategoriesRepository {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<MongooseCategory>,
  ) {}

  async index(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories.map(MongooseCategoryMapper.toDomain);
  }

  async find(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id);
    return category && MongooseCategoryMapper.toDomain(category);
  }

  async create(item: Category): Promise<Category> {
    const raw = MongooseCategoryMapper.toMongoose(item);
    const category = await this.categoryModel.create(raw);
    return MongooseCategoryMapper.toDomain(category);
  }

  async update(id: string, item: Category): Promise<Category> {
    const raw = MongooseCategoryMapper.toMongoose(item);
    const category = await this.categoryModel.findOneAndUpdate(
      { _id: id },
      {
        ...raw,
      },
      { new: true },
    );
    return MongooseCategoryMapper.toDomain(category);
  }

  async upsert(id: string, item: Category): Promise<Category> {
    const raw = MongooseCategoryMapper.toMongoose(item);
    const category = await this.categoryModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        ...raw,
      },
      { new: true },
    );
    return MongooseCategoryMapper.toDomain(category);
  }

  async delete(id: string): Promise<Category> {
    const category = await this.categoryModel.findOneAndDelete({ _id: id });
    return MongooseCategoryMapper.toDomain(category);
  }
}
