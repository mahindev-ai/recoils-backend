/* eslint-disable prettier/prettier */
// src/direcciones/direcciones.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { DireccionDto } from './direcciones.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createDireccionDto: DireccionDto, @Request() req) {
    const userId = req.user.userId; // Extraer el ID del usuario del token JWT
    createDireccionDto.id_cliente = userId; // Asignar el ID del cliente a la dirección
    return this.direccionesService.create(createDireccionDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Request() req) {
    const userId = req.user.userId; // Extraer el ID del usuario del token JWT
    return this.direccionesService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.direccionesService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.direccionesService.remove(+id);
  }
}
