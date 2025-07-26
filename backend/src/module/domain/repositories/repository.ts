import { Result } from 'src/shared/common/Result';
import { UserDto } from '../dtos/User.dto';

// why should use interface instead of class?
export interface IRepository {
  createUser(user: UserDto): Promise<Result>;
  findUserById(userId: string): Promise<Result>;
  findUserByEmail(email: string): Promise<Result>;
}
