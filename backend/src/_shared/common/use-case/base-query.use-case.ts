import { Inject } from '@nestjs/common';
import {
  IQueryRepository,
  IQueryRepositorySymbol,
} from 'src/module/user/domain/repositories/query.repository';
import { Result } from '../Result';

export abstract class BaseQueryUsecase<TResult = Result> {
  @Inject(IQueryRepositorySymbol)
  protected readonly queryRepository: IQueryRepository;

  abstract execute(query: any): Promise<TResult>;
}
