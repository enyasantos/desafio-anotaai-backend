export abstract class IGenericRepository<T> {
  abstract index(): Promise<T[]>;
  abstract find(id: string): Promise<T>;
  abstract create(item: T): Promise<T>;
  abstract update(id: string, item: T): Promise<T>;
  abstract delete(id: string): Promise<T>;
}
