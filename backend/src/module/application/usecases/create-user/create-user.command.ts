type CreateUserCommandArgs = {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
};

export class CreateUserCommand {
  private readonly _args: CreateUserCommandArgs;

  constructor(args: CreateUserCommandArgs) {
    this._args = args;
  }

  public get args(): CreateUserCommandArgs {
    return this._args;
  }
}
