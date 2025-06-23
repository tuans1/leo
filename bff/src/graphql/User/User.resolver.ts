import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/User.model';
import { GetUserArgs } from './dtos/getUser.input';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

import { firstValueFrom } from 'rxjs';
import {
  UserServiceClient,
  User as GrpcUser,
} from 'src/proto/build/proto-gen/user';

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
      console.log('🚀 ~ UserResolver ~ getListUser ~ response:', response);
      return undefined;
    } catch (error) {
      console.error('Error fetching user from gRPC:', error);
      return [];
    }
  }

  @Query(() => [User])
  getListUserBySearch(@Args('params') params: GetUserArgs): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.userService
        .getUser({
          keyword: params.name || '',
        })
        .subscribe({
          next(response) {
            console.log('🚀 ~ UserResolver ~ next ~ response:', response);
            resolve(response.user);
          },
          error(err) {
            console.log(err, '---err');
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(err);
          },
        });
    });
  }
}
