import { User } from 'src/proto/build/proto-gen/user';

type TLoginResult = {
  user: User;
  token: string;
};

export class LoginResult {
  constructor(public readonly data: TLoginResult) {
    this._data = data;
  }

  private readonly _data: TLoginResult;

  present() {
    return {
      user: {
        fullName: this._data.user.fullName,
        email: this._data.user.email,
        avatar: this._data.user.avatar,
        createdAt: this._data.user.createdAt,
        updatedAt: this._data.user.updatedAt,
        userId: this._data.user.userId,
        isActive: this._data.user.isActive,
      },
      token: this._data.token,
    };
  }
}
