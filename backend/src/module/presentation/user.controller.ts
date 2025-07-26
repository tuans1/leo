import { Controller } from '@nestjs/common';

import {
  CreateUserRequest,
  GetListUserRequest,
  UserServiceControllerMethods,
} from 'src/proto/build/proto-gen/user';

@Controller()
@UserServiceControllerMethods()
export class AppController {
  constructor() {}

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

  async createUser(request: CreateUserRequest) {
    console.log(request);
  }
}
