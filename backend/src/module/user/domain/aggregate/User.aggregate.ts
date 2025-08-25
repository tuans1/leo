export type UserAggregateArgs = {
  userId?: string;
  email?: string;
  fullName?: string;
  password?: string;
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

  static createUser(props: UserAggregateArgs) {
    const userAggregate = new UserAggregate(props);
    return userAggregate;
  }
  static login(props: UserAggregateArgs) {
    const userAggregate = new UserAggregate(props);
    return userAggregate;
  }
}
