// src/conductores/conductores.entity.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'conductores',
  timestamps: false,
})
export class Conductores extends Model<Conductores> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nombre: string;

  @Column
  licencia: string;

  @Column
  fecha_vigencia_licencia: Date;

  @Column
  cedula: string;
}
