import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IUsecase } from 'src/_shared/common/definitions/interfaces/IUsecase';
import { Result } from 'src/_shared/common/Result';
import { GetListUserQuery } from './get-user-by-email.query';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import {
  IQueryRepository,
  IQueryRepositorySymbol,
} from 'src/module/user/domain/repositories/query.repository';

@QueryHandler(GetListUserQuery)
export class GetListUserUsecase
  implements IUsecase, IQueryHandler<GetListUserQuery>
{
  constructor(
    @Inject(IQueryRepositorySymbol)
    private readonly userQueryRepository: IQueryRepository,
  ) {}

  async execute(): Promise<Result> {
    try {
      const result = await this.userQueryRepository.getListUser();

      return Result.success(result.data);
    } catch (error) {
      return Result.fail(error);
    }
  }
}
