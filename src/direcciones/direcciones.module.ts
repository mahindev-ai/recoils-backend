/* eslint-disable prettier/prettier */
// src/direcciones/direcciones.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DireccionesService } from './direcciones.service';
import { DireccionesController } from './direcciones.controller';
import { Direcciones } from './direcciones.entity';

@Module({
  imports: [SequelizeModule.forFeature([Direcciones])],
  providers: [DireccionesService],
  controllers: [DireccionesController],
  exports: [DireccionesService],
})
export class DireccionesModule { }
