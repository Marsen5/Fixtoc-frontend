import { Tecnico } from './Tecnico';
import {Usuario} from './Usuario';

export interface Incidencia {
  _id: string;
  titulo: string;
  descripcion: string;
  producto: string;
  coste: number;
  estado: string;
  fechaPedido: Date;
  id_tecnico: Tecnico;
  id_usuario: any;
  horas_reparacion: number;
  material: string;
}