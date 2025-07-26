import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IUsecase } from 'src/shared/common/definitions/interfaces/IUsecase';
import { Result } from 'src/shared/common/Result';
import { CreateUserCommand } from './create-user.command';
import { v4 as uuid } from 'uuid';

@CommandHandler(CreateUserCommand)
export class CreateUserUsecase
  implements IUsecase, ICommandHandler<CreateUserCommand>
{
  constructor(private readonly) {}

  async execute(userData: CreateUserCommand): Promise<Result> {
    try {
      // Mock successful creation
      const newUser = {
        userId: uuid(), // Generate a new UUID for the user
        email: userData.email,
        password: userData.password,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        fullName: userData.fullName,
      };

      return Result.success(newUser);
    } catch (error) {
      return Result.error(error);
    }
  }
}
