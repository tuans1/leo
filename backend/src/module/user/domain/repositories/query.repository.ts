import { Result } from 'src/_shared/common/Result';
import { User } from 'src/proto/build/proto-gen/user';

export interface IQueryRepository {
  getListUser(): Promise<Result<User[]>>;
  findUserById(userId: string): Promise<Result<User | null>>;
  findUserByEmail(email: string): Promise<Result<User | null>>;
}

export const IQueryRepositorySymbol = Symbol('IQueryRepositorySymbol');
