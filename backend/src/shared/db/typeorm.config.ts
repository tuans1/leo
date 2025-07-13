import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USERNAME ?? 'admin',
  password: process.env.POSTGRES_PASSWORD ?? '@Aa123456789',
  database: process.env.POSTGRES_DATABASE ?? 'postgres',
  entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false, // Không nên bật ở production!
  logging: process.env.NODE_ENV === 'development',
};
