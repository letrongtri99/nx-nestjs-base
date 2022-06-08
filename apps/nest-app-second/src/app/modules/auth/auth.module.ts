import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../../guards/local-auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../guards/jwt/jwt.strategy';
import { Secret } from '@my-nest-lib/constants';
import { PrismaService } from '@my-nest-lib/services/prisma';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: Secret.KEY,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
