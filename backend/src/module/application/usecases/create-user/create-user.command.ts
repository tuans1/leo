export class CreateUserCommand {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly name: string,
    public readonly password: string,
  ) {}
}
