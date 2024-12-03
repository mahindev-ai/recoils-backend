// src/ruta/ruta.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RutaService } from './ruta.service';
import { RutaDto } from './ruta.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ruta')
export class RutaController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly rutaService: RutaService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createRutaDto: RutaDto) {
    return this.rutaService.create(createRutaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.rutaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.rutaService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.rutaService.remove(+id);
  }
}
