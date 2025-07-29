import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/shared/db/typeorm.config';
import { UserController } from './presentation/user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserUsecase } from './application/usecases/create-user/create-user.handler';
import { CommandRepository } from './insfrastructure/repositories/command.repository';
import { ICommandRepositorySymbol } from './domain/repositories/command.repository';
import { IQueryRepositorySymbol } from './domain/repositories/query.repository';
import { QueryRepository } from './insfrastructure/repositories/query.repository';
import { GetListUserUsecase } from './application/query/get-list-user/get-list-user.handler';

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
    CqrsModule,
  ],
  controllers: [UserController],
  providers: [
    CreateUserUsecase,
    GetListUserUsecase,
    QueryRepository,
    {
      provide: ICommandRepositorySymbol,
      useClass: CommandRepository,
    },
    {
      provide: IQueryRepositorySymbol,
      useExisting: QueryRepository,
    },
  ],
})
export class UserModule {}
