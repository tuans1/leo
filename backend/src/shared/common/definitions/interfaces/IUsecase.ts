import { Result } from '../../Result';

export interface IUsecase {
  execute(...args: any): Promise<Result> | Result;
}
