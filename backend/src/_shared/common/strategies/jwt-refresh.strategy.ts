// auth/strategies/jwt-refresh.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../types/jwt.type';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      secretOrKey: 'JWT_REFRESH_SECRET',
      passReqToCallback: true,
    });
  }

  validate(payload: JwtPayload): any {
    console.log('🚀 ~ JwtRefreshTokenStrategy ~ validate ~ payload:', payload);
    return { ...payload, refreshTokenExpiresAt: '' };
  }
}
