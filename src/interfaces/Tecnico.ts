export interface Tecnico {
  _id: string;
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  imgURL: string;
  direction: string;
  role: string;
  observaciones: string;
  telefono: string;
  puesto: string;
  precio_hora: number;
  activo: boolean;
}