import { Result } from 'src/shared/common/Result';

export interface IQueryRepository {
  getListUser(): Promise<Result>;
  findUserById(userId: string): Promise<Result>;
  findUserByEmail(email: string): Promise<Result>;
}

export const IQueryRepositorySymbol = Symbol('IQueryRepositorySymbol');
