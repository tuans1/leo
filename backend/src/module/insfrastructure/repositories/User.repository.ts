import { UserDto } from 'src/module/domain/dtos/User.dto';
import { IRepository } from 'src/module/domain/repositories/repository';
import { Result } from 'src/shared/common/Result';

export class UserRepository implements IRepository {
  async createUser(user: UserDto): Promise<Result> {
    return Result.success(user);
  }
  async findUserById(userId: string): Promise<Result> {
    return Result.success(null);
  }
  async findUserByEmail(email: string): Promise<Result> {
    return Result.success(null);
  }
}
