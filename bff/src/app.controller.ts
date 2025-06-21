import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppController {
  @Query(() => String)
  getHello(): string {
    return 'Hi';
  }
}
