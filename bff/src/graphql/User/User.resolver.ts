import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/User.model';
import { GetUserArgs } from './dtos/getUser.input';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import {
  UserServiceClient,
  User as GrpcUser,
} from 'src/proto/build/proto-gen/user';
import { firstValueFrom } from 'rxjs';

@Resolver()
export class UserResolver {
  private userService: UserServiceClient;

  constructor(@Inject('USER_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceClient>('UserService');
  }

  // Helper method to map gRPC user to GraphQL user
  private mapGrpcUserToGraphQL(grpcUser: GrpcUser): User {
    return {
      id: grpcUser.email, // Using email as ID since it's unique
      name: grpcUser.name,
      email: grpcUser.email,
      avatar: grpcUser.avatar || '',
      userCreatedDt: grpcUser.userCreatedDt,
    };
  }

  @Query(() => [User])
  async getListUser(): Promise<User[]> {
    try {
      const response = await firstValueFrom(
        this.userService.getUser({ keyword: '' }),
      );

      return response?.user ? [this.mapGrpcUserToGraphQL(response.user)] : [];
    } catch (error) {
      console.error('Error fetching user from gRPC:', error);
      return [];
    }
  }

  @Query(() => [User])
  async getListUserBySearch(
    @Args('params') params: GetUserArgs,
  ): Promise<User[]> {
    console.log('🚀 ~ UserResolver ~ params:', params);
    try {
      const response = await firstValueFrom(
        this.userService.getUser({ keyword: params.name || '' }),
      );

      return response?.user ? [this.mapGrpcUserToGraphQL(response.user)] : [];
    } catch (error) {
      console.error('Error searching user from gRPC:', error);
      return [];
    }
  }
}
