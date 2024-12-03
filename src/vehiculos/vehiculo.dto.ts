// src/vehiculos/vehiculo.dto.ts
export class VehiculoDto {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  estado: string;
  licencia_transito: Date;
  tecnomecanica: Date;
  soat: Date;
  tipo_vehiculo: string;
  capacidad_carga: number;
}
