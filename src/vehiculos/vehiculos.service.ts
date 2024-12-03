/* eslint-disable prettier/prettier */
// src/vehiculos/vehiculos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vehiculos } from './vehiculos.entity';
import { VehiculoDto } from './vehiculo.dto';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectModel(Vehiculos)
    private vehiculosModel: typeof Vehiculos,
  ) { }

  async create(createVehiculoDto: VehiculoDto) {
    return this.vehiculosModel.create(createVehiculoDto);
  }

  async findAll(): Promise<VehiculoDto[]> {
    return this.vehiculosModel.findAll();
  }

  async findOne(id: number): Promise<VehiculoDto> {
    const vehiculo = await this.vehiculosModel.findOne({ where: { id } });
    if (!vehiculo) {
      throw new NotFoundException('Vehículo no encontrado');
    }
    return vehiculo;
  }

  async remove(id: number) {
    const vehiculo = await this.vehiculosModel.findOne({ where: { id } });
    if (!vehiculo) {
      throw new NotFoundException('Vehículo no encontrado');
    }
    return this.vehiculosModel.destroy({ where: { id } });
  }
}
