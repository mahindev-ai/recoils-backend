// src/solicitudes_recoleccion/solicitudes_recoleccion.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SolicitudesRecoleccionService } from './solicitudes_recoleccion.service';
import { SolicitudesRecoleccionController } from './solicitudes_recoleccion.controller';
import { SolicitudesRecoleccion } from './solicitudes_recoleccion.entity';
import { Conductores } from '../conductores/conductores.entity';
import { Vehiculos } from '../vehiculos/vehiculos.entity';
import { Ruta } from '../ruta/ruta.entity';
import { Direcciones } from '../direcciones/direcciones.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([
      SolicitudesRecoleccion,
      Conductores,
      Vehiculos,
      Ruta,
      Direcciones,
    ]),
  ],
  providers: [SolicitudesRecoleccionService],
  controllers: [SolicitudesRecoleccionController],
  exports: [SolicitudesRecoleccionService],
})
// eslint-disable-next-line prettier/prettier
export class SolicitudesRecoleccionModule { }
