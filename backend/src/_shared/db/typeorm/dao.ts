import { AppDataSource } from '../data-source';
import { UserEntity } from '../entities';

export const UserDao = AppDataSource.getRepository(UserEntity);

export const UserDaoSymbol = Symbol('UserDao');
