import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  IsUUID,
  Length,
} from 'class-validator';

// export type TUserDTO = {
//   userId: string;
//   email: string;
//   name: string;
//   avatar: string;
//   createdAt: Date;
//   updatedAt: Date;
//   password: string;
//   isActive: boolean;
// };

export class UserDto {
  @IsUUID()
  userId: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(2, 50)
  @IsNotEmpty()
  fullName: string;

  @IsUrl()
  avatar?: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  updatedAt: Date;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
