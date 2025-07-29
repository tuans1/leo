import { Injectable } from '@nestjs/common';
import { IQueryRepository } from 'src/module/domain/repositories/query.repository';
import { Result } from 'src/shared/common/Result';
import { User } from 'src/shared/db/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class QueryRepository implements IQueryRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getListUser(): Promise<Result> {
    try {
      const users = await this.dataSource
        .createQueryBuilder()
        .select()
        .from(User, 'user')
        .execute();

      return Result.success(users);
    } catch (error) {
      console.error('Error fetching user list:', error);
      return Result.error(error);
    }
  }

  async findUserById(userId: string): Promise<Result> {
    try {
      const user = await this.dataSource
        .createQueryBuilder()
        .select()
        .from(User, 'user')
        .where('user.id = :id', { id: userId })
        .execute();

      return Result.success(user);
    } catch (error) {
      return Result.error(error);
    }
  }

  async findUserByEmail(email: string): Promise<Result> {
    try {
      const user = await this.dataSource
        .createQueryBuilder()
        .select()
        .from(User, 'user')
        .where('user.email = :email', { email })
        .execute();

      return Result.success(user);
    } catch (error) {
      return Result.error(error);
    }
  }
}
