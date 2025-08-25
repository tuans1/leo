import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IUsecase } from 'src/_shared/common/definitions/interfaces/IUsecase';
import { Result } from 'src/_shared/common/Result';
import { CreateUserCommand } from './create-user.command';
import {
  ICommandRepository,
  ICommandRepositorySymbol,
} from 'src/module/user/domain/repositories/command.repository';
import { UserAggregate } from 'src/module/user/domain/aggregate/User.aggregate';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Error } from 'src/_shared/common/errors/Error';

@CommandHandler(CreateUserCommand)
export class CreateUserUsecase
  implements IUsecase, ICommandHandler<CreateUserCommand>
{
  constructor(
    @Inject(ICommandRepositorySymbol)
    private readonly userCommandRepository: ICommandRepository,
  ) {}

  async execute(userData: CreateUserCommand): Promise<Result> {
    const userAggregate = UserAggregate.login({
      email: userData.args.email,
      password: userData.args.password,
    });

    const result = await this.userCommandRepository.createUser(userAggregate);

    if (result.isFail) {
      return Result.fail(Error.serverError(result.error));
    }

    return Result.success(userAggregate.present);
  }
}
