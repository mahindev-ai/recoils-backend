// src/direcciones/direcciones.entity.ts
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Clientes } from '../clientes/clientes.entity';

@Table({
  tableName: 'direcciones',
  timestamps: false,
})
export class Direcciones extends Model<Direcciones> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @ForeignKey(() => Clientes)
  @Column
  id_cliente: number;
}
