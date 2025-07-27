import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IUsecase } from 'src/shared/common/definitions/interfaces/IUsecase';
import { Result } from 'src/shared/common/Result';
import { CreateUserCommand } from './create-user.command';
import { v4 as uuid } from 'uuid';
import { ICommandRepository } from 'src/module/domain/repositories/command.repository';
import { UserAggregate } from 'src/module/domain/aggregate/User.aggregate';

@CommandHandler(CreateUserCommand)
export class CreateUserUsecase
  implements IUsecase, ICommandHandler<CreateUserCommand>
{
  constructor(private readonly userCommandRepository: ICommandRepository) {}

  async execute(userData: CreateUserCommand): Promise<Result> {
    try {
      // Mock successful creation
      const newUser = new UserAggregate({
        userId: uuid(), // Generate a new UUID for the user
        email: userData.args.email,
        password: userData.args.password,
        fullName: userData.args.fullName,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
      });

      const result = await this.userCommandRepository.createUser(newUser);

      return Result.success(result.data);
    } catch (error) {
      return Result.error(error);
    }
  }
}
