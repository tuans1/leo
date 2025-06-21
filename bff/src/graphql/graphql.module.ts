import { Module } from '@nestjs/common';
import { UserResolver } from './User/User.resolver';

@Module({
  providers: [UserResolver],
})
export class GraphqlModule {}
