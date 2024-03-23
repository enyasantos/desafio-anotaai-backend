import {
  Product,
  ProductProps,
} from 'src/modules/products/entities/product.entity';

export interface MongooseProduct extends ProductProps {
  _id: string;
}

export class MongooseProductMapper {
  static toMongoose(product: Product): MongooseProduct {
    return {
      _id: product.getId(),
      title: product.getTitle(),
      owner: product.getOwner(),
      description: product.getDescription(),
      price: product.getPrice(),
      category: product.getCategory(),
    };
  }

  static toDomain(raw: MongooseProduct): Product {
    return new Product(
      {
        title: raw.title,
        owner: raw.owner,
        description: raw.description,
        price: raw.price,
        category: raw.category,
      },
      raw._id,
    );
  }
}
