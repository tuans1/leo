/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GrpcResponseInterceptor } from 'src/_shared/nestjs/interceptor/grpc.interceptor';
import { GrpcCatchEverythingFilter } from 'src/_shared/nestjs/interceptor/grpc.exception-filter';

import {
  AuthServiceControllerMethods,
  LoginRequest,
} from 'src/proto/build/proto-gen/auth';
import { LoginQuery } from '../application/use-cases/login/login.query';
import { Result } from 'src/_shared/common/Result';

@Controller()
@AuthServiceControllerMethods()
@UseFilters(new GrpcCatchEverythingFilter())
@UseInterceptors(new GrpcResponseInterceptor())
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async login(request: LoginRequest): Promise<Result> {
    const result = await this.queryBus.execute(new LoginQuery(request));

    if (result.isFail) {
      return Result.fail(result.error);
    }

    return Result.success(result.data);
  }
}
