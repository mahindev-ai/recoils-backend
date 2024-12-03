// src/solicitudes_recoleccion/solicitud_recoleccion.dto.ts
export class SolicitudRecoleccionDto {
  id: number;
  id_cliente: number;
  id_direccion: number;
  fecha_programada: Date;
  numero_pinpinas: number;
  detalles_adicionales: string;
  estado_solicitud: string;
  id_ruta: number;
}
