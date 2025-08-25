type GetListUserArgs = {};

export class GetListUserQuery {
  private readonly _args: GetListUserArgs;

  constructor(args: GetListUserArgs) {
    this._args = args;
  }

  public get args(): GetListUserArgs {
    return this._args;
  }
}
