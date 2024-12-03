// src/ruta/ruta.entity.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  BelongsTo,
} from 'sequelize-typescript';
import { Vehiculos } from '../vehiculos/vehiculos.entity';
import { Conductores } from '../conductores/conductores.entity';

@Table({
  tableName: 'ruta',
  timestamps: false,
})
export class Ruta extends Model<Ruta> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  estado: string;

  @ForeignKey(() => Vehiculos)
  @Column
  id_vehiculo: number;

  @ForeignKey(() => Conductores)
  @Column
  id_conductor: number;

  @BelongsTo(() => Vehiculos)
  Vehiculos: Vehiculos;

  @BelongsTo(() => Conductores)
  Conductores: Conductores;
}
