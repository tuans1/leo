export type UserAggregateArgs = {
  userId: string;
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  avatar?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export class UserAggregate {
  private readonly _user: UserAggregateArgs;
  constructor(user: UserAggregateArgs) {
    this._user = user;
  }

  public get present(): UserAggregateArgs {
    return this._user;
  }
}
