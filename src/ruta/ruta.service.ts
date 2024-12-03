// src/ruta/ruta.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ruta } from './ruta.entity';
import { RutaDto } from './ruta.dto';
import { Conductores } from '../conductores/conductores.entity';
import { Vehiculos } from '../vehiculos/vehiculos.entity';

@Injectable()
export class RutaService {
  constructor(
    @InjectModel(Ruta)
    private rutaModel: typeof Ruta,
    @InjectModel(Conductores)
    private conductoresModel: typeof Conductores,
    @InjectModel(Vehiculos)
    private vehiculosModel: typeof Vehiculos,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async create(createRutaDto: RutaDto) {
    return this.rutaModel.create(createRutaDto);
  }

  async findAll(): Promise<RutaDto[]> {
    return this.rutaModel.findAll({
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
    });
  }

  async findOne(id: number): Promise<RutaDto> {
    const ruta = await this.rutaModel.findOne({
      where: { id },
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
    });
    if (!ruta) {
      throw new NotFoundException('Ruta no encontrada');
    }
    return ruta;
  }

  async remove(id: number) {
    const ruta = await this.rutaModel.findOne({ where: { id } });
    if (!ruta) {
      throw new NotFoundException('Ruta no encontrada');
    }
    return this.rutaModel.destroy({ where: { id } });
  }
}
