/* eslint-disable prettier/prettier */
// src/vehiculos/vehiculos.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';
import { Vehiculos } from './vehiculos.entity';

@Module({
  imports: [SequelizeModule.forFeature([Vehiculos])],
  providers: [VehiculosService],
  controllers: [VehiculosController],
  exports: [VehiculosService],
})
export class VehiculosModule { }
