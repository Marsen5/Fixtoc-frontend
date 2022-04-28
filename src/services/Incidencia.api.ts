import axios from "./axios"
import { AxiosResponse } from "axios"

//Importamos la interfaz del objeto 
import  { Incidencia } from '@/interfaces/Incidencia'

//Funcion que nos permite crear un usuario
export const createIncidencia = async (incidencia: Incidencia) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/incidencias', incidencia) //Añade /product a la url y le pasa el producto
}