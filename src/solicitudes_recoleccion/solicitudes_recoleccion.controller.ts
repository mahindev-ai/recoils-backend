import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SolicitudesRecoleccionService } from './solicitudes_recoleccion.service';
import { SolicitudRecoleccionDto } from './solicitudes_recoleccion.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';

@Controller('solicitudes_recoleccion')
export class SolicitudesRecoleccionController {
  constructor(
    private readonly solicitudesRecoleccionService: SolicitudesRecoleccionService,
    // eslint-disable-next-line prettier/prettier
  ) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() createSolicitudRecoleccionDto: SolicitudRecoleccionDto,
    @Request() req,
  ) {
    const userId = req.user.userId; // Extraer el ID del usuario del token JWT
    createSolicitudRecoleccionDto.id_cliente = userId; // Asignar el ID del cliente a la solicitud
    return this.solicitudesRecoleccionService.create(
      createSolicitudRecoleccionDto,
    );
  }
  @Get('historial')
  @UseGuards(AuthGuard('jwt'))
  async getHistorial(@Request() req) {
    const userId = req.user.userId; // Extraer el ID del usuario del token JWT
    console.log('getHistorial', userId);
    return this.solicitudesRecoleccionService.getHistorial(userId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Request() req) {
    const userId = req.user.userId; // Extraer el ID del usuario del token JWT
    return this.solicitudesRecoleccionService.findAll(userId);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    return this.solicitudesRecoleccionService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.solicitudesRecoleccionService.remove(+id);
  }
}
