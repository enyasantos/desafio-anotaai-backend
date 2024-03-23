const mongoUUIDRegExp = /^[0-9a-fA-F]{24}$/;

export function isMongoUUID(value: string): boolean {
  return mongoUUIDRegExp.test(value);
}
