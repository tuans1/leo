import { User } from 'src/proto/build/proto-gen/user';

export type JwtPayload = {
  sub: string;
} & Pick<User, 'email' | 'fullName' | 'isActive'>;
