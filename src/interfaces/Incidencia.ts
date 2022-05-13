import {Usuario} from './Usuario';

export interface Incidencia {
  _id: string;
  titulo: string;
  descripcion: string;
  producto: string;
  coste: number;
  estado: string;
  fechaPedido: Date;
  id_tecnico: string;
  id_usuario: string;
  horas_reparacion: number;
  material: string;
}