import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './shared/db/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => typeOrmConfig,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
