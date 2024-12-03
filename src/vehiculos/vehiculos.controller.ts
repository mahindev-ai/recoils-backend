/* eslint-disable prettier/prettier */
// src/vehiculos/vehiculos.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { VehiculoDto } from './vehiculo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createVehiculoDto: VehiculoDto) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.vehiculosService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.vehiculosService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.vehiculosService.remove(+id);
  }
}
