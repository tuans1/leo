type LoginQueryArgs = {
  email: string;
  password: string;
};

export class LoginQuery {
  private readonly _args: LoginQueryArgs;

  constructor(args: LoginQueryArgs) {
    this._args = args;
  }

  public get args() {
    return this._args;
  }
}
