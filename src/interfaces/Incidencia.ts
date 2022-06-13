import { Material } from './Material';
import { Tecnico } from './Tecnico';
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
  id_material: any;
}