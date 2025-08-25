import { Injectable } from '@nestjs/common';
import { IQueryRepository } from 'src/module/user/domain/repositories/query.repository';
import { Result } from 'src/_shared/common/Result';
import { UserEntity as User } from 'src/_shared/db/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class QueryRepository implements IQueryRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getListUser(): Promise<Result> {
    try {
      const users: User[] = await this.dataSource
        .createQueryBuilder()
        .select()
        .from(User, 'user')
        .getMany();
      console.log('🚀 ~ QueryRepository ~ getListUser ~ users:', users);

      return Result.success(users);
    } catch (error) {
      console.error('Error fetching user list:', error);
      return Result.fail(error);
    }
  }

  async findUserById(userId: string): Promise<Result> {
    try {
      const user: User | null = await this.dataSource
        .createQueryBuilder()
        .select()
        .from(User, 'user')
        .where('user.id = :id', { id: userId })
        .getOne();

      return Result.success(user);
    } catch (error) {
      return Result.fail(error);
    }
  }

  async findUserByEmail(email: string): Promise<Result> {
    try {
      const user = await this.dataSource
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne();

      return Result.success(user);
    } catch (error) {
      return Result.fail(error);
    }
  }
}
