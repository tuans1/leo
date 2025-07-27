import { Controller, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import {
  CreateUserRequest,
  CreateUserResponse,
  GetListUserRequest,
  UserServiceControllerMethods,
} from 'src/proto/build/proto-gen/user';
import { CreateUserCommand } from '../application/usecases/create-user/create-user.command';
import { Result } from 'src/shared/common/Result';

@Controller()
@UserServiceControllerMethods()
export class UserController {
  constructor(private readonly commandBus: CommandBus) {}

  async getListUser(request: GetListUserRequest) {
    return {
      user: [
        {
          id: '11111',
          name: 'Baby',
          email: 'baba@gmail.com',
          avatar: 'https://i.pravatar.cc/120?img=2',
          userCreatedDt: '2023-01-01',
        },
      ],
    };
  }

  async createUser(request: CreateUserRequest): Promise<Result> {
    const result = await this.commandBus.execute<
      any,
      Result<CreateUserResponse>
    >(new CreateUserCommand(request));

    return Result.success(result.data);
  }
}
