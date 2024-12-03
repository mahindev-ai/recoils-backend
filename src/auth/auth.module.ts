import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { Clientes } from '../clientes/clientes.entity';
import { AuthController } from './auth.controller';
import { jwtConstants } from './jwt.constants';

@Module({
  imports: [
    SequelizeModule.forFeature([Clientes]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
// eslint-disable-next-line prettier/prettier
export class AuthModule { }
