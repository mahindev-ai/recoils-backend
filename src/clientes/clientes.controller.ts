import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { AuthGuard } from '@nestjs/passport';
import { ClienteDto } from './clientes.dto';
import { Request } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly clientesService: ClientesService) { }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Request() req): Promise<ClienteDto> {
    const userId = req.user.userId; // Extraer el ID del usuario del token JWT
    return this.clientesService.findOne(userId);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string): Promise<ClienteDto> {
    return this.clientesService.findOne(+id);
  }

  @Post()
  create(@Body() createClienteDto: any) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
