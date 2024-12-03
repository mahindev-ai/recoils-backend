/* eslint-disable prettier/prettier */
// src/conductores/conductores.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConductoresService } from './conductor.service';
import { ConductoresController } from './conductor.controller';
import { Conductores } from './conductores.entity';

@Module({
  imports: [SequelizeModule.forFeature([Conductores])],
  providers: [ConductoresService],
  controllers: [ConductoresController],
  exports: [ConductoresService],
})
export class ConductoresModule { }
