import { DataSource } from 'typeorm';
import { typeOrmConfig } from './typeorm.config';

export const AppDataSource = new DataSource({
  ...typeOrmConfig,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
});
