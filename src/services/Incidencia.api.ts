import axios from "./axios"


//Importamos la interfaz del objeto 
import  { Incidencia } from '@/interfaces/Incidencia'

//Funcion que nos permite crear un usuario
export const createIncidencia = async (incidencia: Incidencia) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/incidencia', incidencia) //Añade /product a la url y le pasa el producto
}

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

