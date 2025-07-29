import { Result } from 'src/shared/common/Result';
import { UserAggregate } from '../aggregate/User.aggregate';

// why should use interface instead of class?
export interface ICommandRepository {
  createUser(user: UserAggregate): Promise<Result>;
}

export const ICommandRepositorySymbol = Symbol('ICommandRepositorySymbol');
