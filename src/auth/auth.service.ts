/* eslint-disable prettier/prettier */
// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Clientes } from '../clientes/clientes.entity';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './register.dto';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Clientes)
    private clientesModel: typeof Clientes,
    private jwtService: JwtService,
  ) { }

  async validateUser(
    numero_identificacion: string,
    pass: string,
  ): Promise<any> {
    const user = await this.clientesModel.findOne({
      where: { numero_identificacion },
    });
    if (user && (await bcrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user.toJSON();
      return result;
    }
    return null;
  }

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newCliente = { ...registerDto, password: hashedPassword };
    const savedCliente = await this.clientesModel.create(newCliente);
    const payload = {
      username: savedCliente.numero_identificacion,
      sub: savedCliente.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(
      loginDto.numero_identificacion,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.numero_identificacion, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
