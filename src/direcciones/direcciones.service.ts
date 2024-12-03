/* eslint-disable prettier/prettier */
// src/direcciones/direcciones.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Direcciones } from './direcciones.entity';
import { DireccionDto } from './direcciones.dto';

@Injectable()
export class DireccionesService {
  constructor(
    @InjectModel(Direcciones)
    private direccionesModel: typeof Direcciones,
  ) { }

  async create(createDireccionDto: DireccionDto) {
    return this.direccionesModel.create(createDireccionDto);
  }

  async findAll(id_cliente: number): Promise<DireccionDto[]> {
    return this.direccionesModel.findAll({ where: { id_cliente } });
  }

  async findOne(id: number): Promise<DireccionDto> {
    const direccion = await this.direccionesModel.findOne({ where: { id } });
    if (!direccion) {
      throw new NotFoundException('Dirección no encontrada');
    }
    return direccion;
  }

  async remove(id: number) {
    const direccion = await this.direccionesModel.findOne({ where: { id } });
    if (!direccion) {
      throw new NotFoundException('Dirección no encontrada');
    }
    return this.direccionesModel.destroy({ where: { id } });
  }
}
