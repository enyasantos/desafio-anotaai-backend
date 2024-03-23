import {
  Category,
  CategoryProps,
} from 'src/modules/categories/entities/category.entity';

export interface MongooseCategory extends CategoryProps {
  _id: string;
}

export class MongooseCategoryMapper {
  static toMongoose(category: Category): MongooseCategory {
    return {
      _id: category.getId(),
      title: category.getTitle(),
      owner: category.getOwner(),
      description: category.getDescription(),
    };
  }

  static toDomain(raw: MongooseCategory): Category {
    return new Category(
      {
        title: raw.title,
        owner: raw.owner,
        description: raw.description,
      },
      raw._id,
    );
  }
}
