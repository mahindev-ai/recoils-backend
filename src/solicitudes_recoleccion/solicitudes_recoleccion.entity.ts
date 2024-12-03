// src/solicitudes_recoleccion/solicitudes_recoleccion.entity.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  BelongsTo,
} from 'sequelize-typescript';
import { Clientes } from '../clientes/clientes.entity';
import { Direcciones } from '../direcciones/direcciones.entity';
import { Ruta } from '../ruta/ruta.entity';

@Table({
  tableName: 'solicitudes_recoleccion',
  timestamps: false,
})
export class SolicitudesRecoleccion extends Model<SolicitudesRecoleccion> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Clientes)
  @Column
  id_cliente: number;

  @ForeignKey(() => Direcciones)
  @Column
  id_direccion: number;

  @Column
  fecha_programada: Date;

  @Column
  numero_pinpinas: number;

  @Column
  detalles_adicionales: string;

  @Column
  estado_solicitud: string;

  @ForeignKey(() => Ruta)
  @Column
  id_ruta: number;

  @BelongsTo(() => Direcciones)
  Direcciones: Direcciones;

  @BelongsTo(() => Ruta)
  Ruta: Ruta;
}
