// src/clientes/clientes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clientes } from './clientes.entity';
import { ClienteDto } from './clientes.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(Clientes)
    private clientesModel: typeof Clientes,
    // eslint-disable-next-line prettier/prettier
  ) { }

  create(createClienteDto: any) {
    return this.clientesModel.create(createClienteDto);
  }

  findAll() {
    return this.clientesModel.findAll();
  }

  async findOne(id: number): Promise<ClienteDto> {
    const cliente = await this.clientesModel.findOne({
      where: { id },
      attributes: [
        'numero_identificacion',
        'email',
        'contacto',
        'nombre',
        'tipo_cliente',
        'categoria',
      ], // Seleccionar solo los campos deseados
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return cliente;
  }

  remove(id: number) {
    return this.clientesModel.destroy({ where: { id } });
  }
}
