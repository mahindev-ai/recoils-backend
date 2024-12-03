// src/ruta/ruta.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RutaService } from './ruta.service';
import { RutaController } from './ruta.controller';
import { Ruta } from './ruta.entity';
import { Conductores } from '../conductores/conductores.entity';
import { Vehiculos } from '../vehiculos/vehiculos.entity';

@Module({
  imports: [SequelizeModule.forFeature([Ruta, Conductores, Vehiculos])],
  providers: [RutaService],
  controllers: [RutaController],
  exports: [RutaService],
})
// eslint-disable-next-line prettier/prettier
export class RutaModule { }
