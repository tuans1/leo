import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  UserServiceControllerMethods,
  UserRequest,
} from './proto/build/proto-gen/user';

@Controller()
@UserServiceControllerMethods()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getUser(request: UserRequest): string {
    console.log('CACACAC-----', request);
    return this.appService.getHello();
  }
}
