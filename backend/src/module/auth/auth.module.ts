import { Module } from '@nestjs/common';
import { AuthController } from './presentation/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { LoginUsecase } from './application/use-cases/login/logic.usecase';
import { IQueryRepositorySymbol } from '../user/domain/repositories/query.repository';
import { QueryRepository } from '../user/insfrastructure/repositories/query.repository';
import { UserDao, UserDaoSymbol } from 'src/_shared/db/typeorm/dao';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './insfrastructure/services/jwt.service';

@Module({
  imports: [
    CqrsModule,
    JwtModule.register({
      secret: 'TEST',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    TokenService,
    LoginUsecase,
    {
      provide: IQueryRepositorySymbol,
      useClass: QueryRepository,
    },
    {
      provide: UserDaoSymbol,
      useValue: UserDao,
    },
  ],
})
export class AuthModule {}
