import { Incidencia } from "./Incidencia";
import { Usuario } from "./Usuario";

export interface Factura{
  _id: string;
  subtotal: number;
  total: number;
  id_usuario: any;
  id_incidencia: any;
}