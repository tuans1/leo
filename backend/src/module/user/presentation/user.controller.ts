import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserCommand } from '../application/usecases/create-user/create-user.command';
import { Result } from 'src/_shared/common/Result';
import { GetListUserQuery } from '../application/query/get-list-user/get-list-user.query';
import { GrpcResponseInterceptor } from 'src/_shared/nestjs/interceptor/grpc.interceptor';
import { GrpcCatchEverythingFilter } from 'src/_shared/nestjs/interceptor/grpc.exception-filter';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetListUserRequest,
  UserServiceControllerMethods,
} from 'src/proto/build/proto-gen/user';

@Controller()
@UserServiceControllerMethods()
@UseFilters(new GrpcCatchEverythingFilter())
@UseInterceptors(new GrpcResponseInterceptor())
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getListUser(request: GetListUserRequest): Promise<Result> {
    const result = await this.queryBus.execute<any, Result<GetListUserRequest>>(
      new GetListUserQuery(request),
    );

    return Result.success(result);
  }

  async createUser(request: CreateUserRequest): Promise<Result> {
    const result = await this.commandBus.execute<
      any,
      Result<CreateUserResponse>
    >(new CreateUserCommand(request));

    if (result.isFail) {
      console.log('🚀 ~ UserController ~ createUser ~ result.error:', result);
      // return Result.fail(result.error);
    }

    return Result.success(result.data);
  }
}
