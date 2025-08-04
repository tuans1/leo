import { Injectable } from '@nestjs/common';
import { UserAggregate } from 'src/module/domain/aggregate/User.aggregate';
import { ICommandRepository } from 'src/module/domain/repositories/command.repository';
import { Error } from 'src/shared/common/errors/Error';
import { Result } from 'src/shared/common/Result';
import { UserEntity } from 'src/shared/db/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CommandRepository implements ICommandRepository {
  constructor(private readonly dataSource: DataSource) {}
  async createUser(user: UserAggregate): Promise<Result> {
    const newUser = user.present;

    try {
      await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values(newUser)
        .execute();

      return Result.success(newUser);
    } catch (error) {
      return Result.fail(Error.serverError(error));
    }
  }
}
