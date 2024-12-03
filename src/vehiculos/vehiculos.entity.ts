// src/vehiculos/vehiculos.entity.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'vehiculos',
  timestamps: false,
})
export class Vehiculos extends Model<Vehiculos> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  placa: string;

  @Column
  marca: string;

  @Column
  modelo: string;

  @Column
  ano: number;

  @Column
  estado: string;

  @Column
  licencia_transito: Date;

  @Column
  tecnomecanica: Date;

  @Column
  soat: Date;

  @Column
  tipo_vehiculo: string;

  @Column
  capacidad_carga: number;
}
