import { Result } from 'src/shared/common/Result';
import { CreateUserCommand } from 'src/module/application/usecases/create-user/create-user.command';

// why should use interface instead of class?
export interface ICommandRepository {
  createUser(user: CreateUserCommand): Promise<Result>;
}
