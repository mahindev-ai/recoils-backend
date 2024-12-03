import { SequelizeOptions } from 'sequelize-typescript';
import { Clientes } from '../src/clientes/clientes.entity'; // Ajusta la ruta según tu estructura de archivos
import { Direcciones } from 'src/direcciones/direcciones.entity';
import { SolicitudesRecoleccion } from 'src/solicitudes_recoleccion/solicitudes_recoleccion.entity';
import { Conductores } from 'src/conductores/conductores.entity';
import { Vehiculos } from 'src/vehiculos/vehiculos.entity';
import { Ruta } from 'src/ruta/ruta.entity';

const sequelizeOptions: SequelizeOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'recoils',
  logging: (msg) => console.log(msg), // Función de registro personalizada
  pool: {
    acquire: 30000,
    idle: 10000,
  },
  models: [
    Clientes,
    Direcciones,
    SolicitudesRecoleccion,
    Conductores,
    Vehiculos,
    Ruta,
  ], // Ajusta la ruta según tu estructura de archivos
};

export { sequelizeOptions };
