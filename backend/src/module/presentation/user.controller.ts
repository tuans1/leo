import { Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import {
  CreateUserRequest,
  CreateUserResponse,
  GetListUserRequest,
  UserServiceControllerMethods,
} from 'src/proto/build/proto-gen/user';
import { CreateUserCommand } from '../application/usecases/create-user/create-user.command';
import { Result } from 'src/shared/common/Result';
import { GetListUserQuery } from '../application/query/get-list-user/get-list-user.query';

@Controller()
@UserServiceControllerMethods()
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getListUser(request: GetListUserRequest): Promise<Result> {
    const result = await this.queryBus.execute<any, Result<GetListUserRequest>>(
      new GetListUserQuery(request),
    );

    return Result.success(result.data);
  }

  async createUser(request: CreateUserRequest): Promise<Result> {
    const result = await this.commandBus.execute<
      any,
      Result<CreateUserResponse>
    >(new CreateUserCommand(request));

    return Result.success(result.data);
  }
}
