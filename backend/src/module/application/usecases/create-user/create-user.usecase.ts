import { ICommandHandler } from '@nestjs/cqrs';
import { UserDto } from 'src/module/domain/dtos/User.dto';
import { IUsecase } from 'src/shared/common/definitions/interfaces/IUsecase';
import { Result } from 'src/shared/common/Result';
import { CreateUserCommand } from './create-user.command';

export class CreateUserUsecase
  implements IUsecase, ICommandHandler<CreateUserCommand>
{
  async execute(userData: UserDto): Promise<Result> {
    try {
      // Mock successful creation
      const newUser: UserDto = {
        email: '',
        password: '',
        avatar: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        name: '',
        userId: '', // Mock data, replace with actual user data
      };

      return Result.success(newUser);
    } catch (error) {
      return Result.error(error);
    }
  }
}
