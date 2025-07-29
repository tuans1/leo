import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IUsecase } from 'src/shared/common/definitions/interfaces/IUsecase';
import { Result } from 'src/shared/common/Result';
import { GetListUserQuery } from './get-list-user.query';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import {
  IQueryRepository,
  IQueryRepositorySymbol,
} from 'src/module/domain/repositories/query.repository';

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
      return Result.error(error);
    }
  }
}
