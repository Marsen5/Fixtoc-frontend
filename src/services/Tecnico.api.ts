import axios from "./axios"


//Importamos la interfaz del objeto 
import  { Tecnico } from '@/interfaces/Tecnico'
import { Incidencia } from "@/interfaces/Incidencia"
import { AxiosResponse } from "axios"

//Funcion que nos permite crear un Tecnico
export const createTecnico = async (tecnico: Tecnico) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/tecnico', tecnico) //Añade /product a la url y le pasa el producto
}

//Funcion que nos permite listar los tecnicos
export const getTecnicos = async (): Promise<Tecnico[]> => 
  await axios.get('/tecnico')


//funcion que busca un tecnico por su id
export const getTecnico = async (id: string): Promise<Tecnico> =>
  await axios.get('/tecnico/'+ id)

  //Funcion que nos permite listar las incidencias de un tecnico
export const getIncidenciasUsuario = async (id: string): Promise<Incidencia[]> => 
  await axios.get('/tecnico/incidencias/'+id) 

//Funcion para actualizar datos Tecnico
export const updateTecnico = async (id: string, tecnico:Tecnico) =>
  await axios.put('/tecnico/'+ id, tecnico)

//Funcion para borrar tecnico
export const deleteTecnico = async (id: string): Promise<AxiosResponse<Tecnico>> => 
  await axios.delete('/tecnico/' + id) //Le pasaremos el id del producto
