import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Clientes } from './clientes.entity';

@Module({
  imports: [SequelizeModule.forFeature([Clientes])],
  providers: [ClientesService],
  controllers: [ClientesController],
  exports: [ClientesService],
})
// eslint-disable-next-line prettier/prettier
export class ClientesModule { }
