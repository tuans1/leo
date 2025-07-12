import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  UserServiceControllerMethods,
  UserRequest,
} from './proto/build/proto-gen/user';
import { Error } from './shared/common/errors/Error';
import { Result } from './shared/common/Result';

@Controller()
@UserServiceControllerMethods()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getUser(request: UserRequest) {
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
