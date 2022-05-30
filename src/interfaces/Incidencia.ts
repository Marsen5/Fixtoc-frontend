import {Usuario} from './Usuario';

export interface Incidencia {
  _id: string;
  titulo: string;
  descripcion: string;
  producto: string;
  coste: number;
  estado: string;
  fechaPedido: Date;
  id_tecnico: any;
  id_usuario: any;
  horas_reparacion: number;
  material: string;
}