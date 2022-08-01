export enum Sign {
  equal = '==',
  notEqual = '!=',
  greaterThan = '>',
  greaterThanOrEqual = '>=',
  lessThan = '<',
  lessThanOrEqual = '<=',
}

export interface Query {
  field: string;
  sign: Sign;
  value: any;
}

export interface Filters {
  queries: Query[];
  limit?: number;
  skip?: number;
  sort?: Record<string, string | number>;
  select?: string | string[];
}

export interface Database {
  createOne<T, R>(data: T): Promise<R>;
  createMany<T, R>(data: T[]): Promise<R[]>;
  readOne<T>(filter: string | Query[]): Promise<T>;
  readMany<T>(filter: Filters): Promise<T[]>;
  updateOne<T, R>(filter: string | Query[], data: T): Promise<R>;
  updateMany<T, R>(queries: Query[], data: T): Promise<R[]>;
  deleteOne<T>(filter: string | Query[]): Promise<T>;
  deleteMany<T>(queries: Query[]): Promise<T>;
}
