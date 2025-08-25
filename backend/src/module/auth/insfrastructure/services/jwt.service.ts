import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../types/jwt.type';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateTokens(data: JwtPayload) {
    const payload = {
      sub: data.sub,
      email: data.email,
      fullName: data.fullName,
      isActive: data.isActive,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessToken(payload),
      this.generateRefreshToken(payload),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  generateAccessToken(payload: Record<string, any>): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: 'JWT_ACCESS_SECRET',
      expiresIn: '15m',
    });
  }

  generateRefreshToken(payload: Record<string, any>): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: 'JWT_REFRESH_SECRET',
      expiresIn: '7d',
    });
  }

  verifyToken(token: string): any {
    return this.jwtService.verify(token);
  }
}
