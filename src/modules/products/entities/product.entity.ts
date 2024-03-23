import { Types } from 'mongoose';

export interface ProductProps {
  title: string;
  owner: string;
  category: string;
  price: number;
  description: string;
}

export class Product {
  private _id: string;
  private props: ProductProps;

  constructor(props: ProductProps, id?: string) {
    this._id = id ?? new Types.ObjectId().toString();
    this.props = {
      ...props,
    };
  }

  public getId(): string {
    return this._id;
  }

  public getTitle(): string {
    return this.props.title;
  }

  public getOwner(): string {
    return this.props.owner;
  }

  public getDescription(): string {
    return this.props.description;
  }

  public getPrice(): number {
    return this.props.price;
  }

  public getCategory(): string {
    return this.props.category;
  }
}
