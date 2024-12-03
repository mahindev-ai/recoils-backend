/* eslint-disable prettier/prettier */
// src/conductores/conductores.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Conductores } from './conductores.entity';
import { ConductorDto } from './conductor.dto';

@Injectable()
export class ConductoresService {
  constructor(
    @InjectModel(Conductores)
    private conductoresModel: typeof Conductores,
  ) { }

  async create(createConductorDto: ConductorDto) {
    return this.conductoresModel.create(createConductorDto);
  }

  async findAll(): Promise<ConductorDto[]> {
    return this.conductoresModel.findAll();
  }

  async findOne(id: number): Promise<ConductorDto> {
    const conductor = await this.conductoresModel.findOne({ where: { id } });
    if (!conductor) {
      throw new NotFoundException('Conductor no encontrado');
    }
    return conductor;
  }

  async remove(id: number) {
    const conductor = await this.conductoresModel.findOne({ where: { id } });
    if (!conductor) {
      throw new NotFoundException('Conductor no encontrado');
    }
    return this.conductoresModel.destroy({ where: { id } });
  }
}
