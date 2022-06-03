import axios from "./axios"


//Importamos la interfaz del objeto 
import  { Tecnico } from '@/interfaces/Tecnico'
import { AxiosResponse } from "axios"

//Funcion que nos permite crear un usuario
export const createTecnico = async (tecnico: Tecnico) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/tecnico', tecnico) //Añade /product a la url y le pasa el producto
}

//Funcion que nos permite listar las incidencias
export const getTecnicos = async (): Promise<Tecnico[]> => 
  await axios.get('/tecnico')


/* //Funcion que nos permite listar las incidencias de un usuario
export const getIncidenciasUsuario = async (id: string): Promise<Incidencia[]> => 
  await axios.get('/tecnico/usuario/'+id) */

/* //Funcion para actualizar estado
export const updateEstado = async (id: string, tecnico:Tecnico) =>
  await axios.put('/tecnico/estado/'+ id, tecnico)
 */
//Funcion para actualizar toda la incidencia
export const updateTecnico = async (id: string, tecnico:Tecnico) =>
  await axios.put('/tecnico/'+ id, tecnico)

//Funcion para borrar tecnico
export const deleteTecnico = async (id: string): Promise<AxiosResponse<Tecnico>> => 
  await axios.delete('/tecnico/' + id) //Le pasaremos el id del producto
