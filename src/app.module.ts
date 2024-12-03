import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { sequelizeOptions } from '../sequelize/db'; // Ajusta la ruta según tu estructura de archivos
import { DireccionesModule } from './direcciones/direcciones.module';
import { SolicitudesRecoleccionModule } from './solicitudes_recoleccion/solicitudes_recoleccion.module';
import { ConductoresModule } from './conductores/conductor.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { RutaModule } from './ruta/ruta.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeOptions),
    AuthModule,
    ClientesModule,
    DireccionesModule,
    SolicitudesRecoleccionModule,
    ConductoresModule,
    VehiculosModule,
    RutaModule,
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
