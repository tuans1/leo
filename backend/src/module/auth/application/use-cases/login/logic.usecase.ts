import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result } from 'src/_shared/common/Result';
import { LoginQuery } from './login.query';
import { Error } from 'src/_shared/common/errors/Error';
import { BaseQueryUsecase } from 'src/_shared/common/use-case/base-query.use-case';
import { LoginResult } from './login.result';
import { TokenService } from 'src/module/auth/insfrastructure/services/jwt.service';
import { Inject } from '@nestjs/common';

@QueryHandler(LoginQuery)
export class LoginUsecase
  extends BaseQueryUsecase
  implements IQueryHandler<LoginQuery>
{
  constructor(
    @Inject(TokenService)
    private readonly tokenService: TokenService,
  ) {
    super();
  }

  async execute(loginRequest: LoginQuery): Promise<Result> {
    const userByEmailResult = await this.queryRepository.findUserByEmail(
      loginRequest.args.email,
    );
    const user = userByEmailResult.data;

    if (userByEmailResult.isFail) {
      return Result.fail(Error.serverError(userByEmailResult.error));
    }

    if (user?.password !== loginRequest.args.password) {
      return Result.fail(Error.badRequest('Wrong password'));
    }
    const tokens = await this.tokenService.generateTokens({
      sub: user.userId,
      email: user.email,
      fullName: user.fullName,
      isActive: user.isActive,
    });
    console.log('🚀 ~ LoginUsecase ~ execute ~ tokens:', tokens);

    return Result.success(
      new LoginResult({
        user: userByEmailResult.data!,
        token: tokens.accessToken,
      }).present(),
    );
  }
}
