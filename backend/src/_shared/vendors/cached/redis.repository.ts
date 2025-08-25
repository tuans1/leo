export interface IRedisRepository {
  get(key: string): Promise<string | null>;
  set(key: string, value: any, ttlSeconds?: number): Promise<void>;
  del(key: string): Promise<void>;
}

export const IRedisRepositorySymbol = Symbol('IRedisRepository');
