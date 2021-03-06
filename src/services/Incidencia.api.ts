import axios from "./axios"


//Importamos la interfaz del objeto 
import  { Incidencia } from '@/interfaces/Incidencia'
import { ResponseCreateFactura } from "@/interfaces/ResponseCreateFactura"


//Funcion que nos permite crear un usuario
export const createIncidencia = async (incidencia: Incidencia): Promise<ResponseCreateFactura> => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  return await axios.post<any, ResponseCreateFactura>('/incidencia', incidencia) //Añade /product a la url y le pasa el producto
  .catch(() => ({} as ResponseCreateFactura))
}

export const getIncidencia = async (id: string): Promise<Incidencia> =>
  await axios.get('/incidencia/' + id) 

//Funcion que nos permite listar las incidencias
export const getIncidencias = async (): Promise<Incidencia[]> => 
  await axios.get('/incidencia')

//Funcion que nos permite listar las incidencias de un usuario
export const getIncidenciasUsuario = async (id: string): Promise<Incidencia[]> => 
  await axios.get('/incidencia/usuario/'+id)

//Funcion para actualizar estado
export const updateEstado = async (id: string, incidencia:Incidencia) =>
  await axios.put('/incidencia/estado/'+ id, incidencia)

//Funcion para actualizar toda la incidencia
export const updateIncidencia = async (id: string, incidencia:Incidencia) =>
  await axios.put('/incidencia/'+ id, incidencia)

//Funcion para asignar un tecnico a la incidencia
export const asignarTecnico = async (id_tecnico: string, id_incidencia: string) =>
await axios.put('/incidencia/tecnico/'+id_incidencia, id_tecnico)