export interface Incidencia {
  _id: string;
  titulo: string;
  descripcion: string;
  producto: string;
  coste: number;
  estado: string;
  fechaEntregado: Date;
  fechaAcabado: Date;
  tecnico: string;
  cliente: string;
}