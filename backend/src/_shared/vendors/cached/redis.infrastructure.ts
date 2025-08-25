/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { IRedisRepository } from './redis.repository';

@Injectable()
export class RedisInfrastructure implements IRedisRepository {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      host:
        process.env.REDIS_HOST ||
        'redis-16089.c295.ap-southeast-1-1.ec2.redns.redis-cloud.com',
      port: Number(process.env.REDIS_PORT) || 16089,
      password: 'KUy4u0EYAe78u4LnfUMQeNnTpbAsq74b',
      // retryStrategy: '',
      // tls/ssl
      // redis cluster
    });
  }

  async get(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }

  async set(key: string, value: any, ttlSeconds?: number): Promise<void> {
    if (ttlSeconds) {
      await this.redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
    } else {
      await this.redis.set(key, JSON.stringify(value));
    }
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
