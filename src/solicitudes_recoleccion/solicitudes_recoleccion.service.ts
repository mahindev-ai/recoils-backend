import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SolicitudesRecoleccion } from './solicitudes_recoleccion.entity';
import { SolicitudRecoleccionDto } from './solicitudes_recoleccion.dto';
import { Conductores } from '../conductores/conductores.entity';
import { Vehiculos } from '../vehiculos/vehiculos.entity';
import { Ruta } from '../ruta/ruta.entity';
import { Direcciones } from '../direcciones/direcciones.entity';

@Injectable()
export class SolicitudesRecoleccionService {
  constructor(
    @InjectModel(SolicitudesRecoleccion)
    private solicitudesRecoleccionModel: typeof SolicitudesRecoleccion,
    @InjectModel(Conductores)
    private conductoresModel: typeof Conductores,
    @InjectModel(Vehiculos)
    private vehiculosModel: typeof Vehiculos,
    @InjectModel(Ruta)
    private rutaModel: typeof Ruta,
    @InjectModel(Direcciones)
    private direccionesModel: typeof Direcciones,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async create(createSolicitudRecoleccionDto: SolicitudRecoleccionDto) {
    console.log('Creating solicitud:', createSolicitudRecoleccionDto);
    createSolicitudRecoleccionDto.estado_solicitud = 'pendiente'; // Establecer el estado por defecto a 'pendiente'
    return this.solicitudesRecoleccionModel.create(
      createSolicitudRecoleccionDto,
    );
  }

  async findAll(id_cliente: number): Promise<SolicitudRecoleccionDto[]> {
    console.log('Finding all solicitudes for cliente:', id_cliente);
    return this.solicitudesRecoleccionModel.findAll({ where: { id_cliente } });
  }

  async findOne(id: number): Promise<SolicitudRecoleccionDto> {
    console.log('Finding solicitud with id:', id);
    const solicitud = await this.solicitudesRecoleccionModel.findOne({
      where: { id },
    });
    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    return solicitud;
  }

  async remove(id: number) {
    console.log('Removing solicitud with id:', id);
    const solicitud = await this.solicitudesRecoleccionModel.findOne({
      where: { id },
    });
    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    return this.solicitudesRecoleccionModel.destroy({ where: { id } });
  }

  async getHistorial(id_cliente: number): Promise<any[]> {
    console.log('Getting historial for cliente:', id_cliente);
    const solicitudes = await this.solicitudesRecoleccionModel.findAll({
      where: { id_cliente },
      include: [
        {
          model: Ruta,
          include: [
            {
              model: Conductores,
              attributes: ['nombre', 'licencia', 'cedula'],
            },
            {
              model: Vehiculos,
              attributes: ['placa', 'marca', 'modelo'],
            },
          ],
        },
        {
          model: Direcciones,
          attributes: ['name'],
        },
      ],
    });

    return solicitudes.map((solicitud) => ({
      fecha_solicitud: solicitud.fecha_programada,
      direccion: solicitud.Direcciones
        ? solicitud.Direcciones.name
        : 'Sin dirección',
      numero_pinpinas: solicitud.numero_pinpinas,
      conductor: solicitud.Ruta
        ? solicitud.Ruta.Conductores.nombre
        : 'Por asignar',
      cedula_conductor: solicitud.Ruta
        ? solicitud.Ruta.Conductores.cedula
        : 'Por asignar',
      placa_vehiculo: solicitud.Ruta
        ? solicitud.Ruta.Vehiculos.placa
        : 'Por asignar',
      telefono: solicitud.Ruta
        ? solicitud.Ruta.Conductores.licencia
        : 'Sin teléfono',
      indicaciones: solicitud.detalles_adicionales,
    }));
  }
}
