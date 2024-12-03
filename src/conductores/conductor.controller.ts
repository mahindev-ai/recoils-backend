/* eslint-disable prettier/prettier */
// src/conductores/conductores.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ConductoresService } from './conductor.service';
import { ConductorDto } from './conductor.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('conductores')
export class ConductoresController {
  constructor(private readonly conductoresService: ConductoresService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createConductorDto: ConductorDto) {
    return this.conductoresService.create(createConductorDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.conductoresService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.conductoresService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.conductoresService.remove(+id);
  }
}
