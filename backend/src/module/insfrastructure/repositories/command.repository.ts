import { Injectable } from '@nestjs/common';
import { UserAggregate } from 'src/module/domain/aggregate/User.aggregate';
import { ICommandRepository } from 'src/module/domain/repositories/command.repository';
import { Result } from 'src/shared/common/Result';
import { User } from 'src/shared/db/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CommandRepository implements ICommandRepository {
  constructor(private readonly dataSource: DataSource) {}

  async createUser(user: UserAggregate): Promise<Result> {
    console.log('🚀 ~ CommandRepository ~ createUser ~ user:', user);
    try {
      const result = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user.present)
        .execute();

      return Result.success(result);
    } catch (error) {
      console.log('🚀 ~ CommandRepository ~ createUser ~ error:', error);
      return Result.error(error);
    }
  }
}
