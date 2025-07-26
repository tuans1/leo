import { Controller } from '@nestjs/common';

import {
  GetListUserRequest,
  UserServiceControllerMethods,
} from 'src/proto/build/proto-gen/user';

@Controller()
@UserServiceControllerMethods()
export class AppController {
  constructor() {}

  getListUser(request: GetListUserRequest) {
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
}
