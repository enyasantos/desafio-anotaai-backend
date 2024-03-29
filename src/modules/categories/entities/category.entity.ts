import { Types } from 'mongoose';

export interface CategoryProps {
  title: string;
  owner: string;
  description: string;
}

export class Category {
  private _id: string;
  private props: CategoryProps;

  constructor(props: CategoryProps, id?: string) {
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

  public toString(type: string): string {
    const strJsonObject = JSON.stringify({
      id: this._id,
      title: this.props.title,
      owner: this.props.owner,
      description: this.props.description,
      type,
    });
    return strJsonObject;
  }
}
