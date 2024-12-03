import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'clientes', // Especifica el nombre de la tabla en minúsculas
  timestamps: false, // Deshabilita el seguimiento de fechas
})
export class Clientes extends Model<Clientes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  numero_identificacion: string;

  @Column
  email: string;

  @Column
  contacto: string;

  @Column
  nombre: string;

  @Column
  tipo_cliente: string;

  @Column
  categoria: string;

  @Column
  password: string;
}
