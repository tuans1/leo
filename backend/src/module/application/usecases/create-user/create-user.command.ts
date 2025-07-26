export class CreateUserCommand {
  constructor(
    public readonly email: string,
    public readonly fullName: string,
    public readonly password: string,
    public readonly confirmPassword: string,
  ) {}
}
