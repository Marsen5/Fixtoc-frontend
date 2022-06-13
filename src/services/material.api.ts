import axios from "./axios"
import { AxiosResponse } from "axios"

//Importamos la interfaz del objeto 
import  { Material } from '@/interfaces/Material'

//Funcion que nos permite crear un material
export const createMaterial = async (material: Material) => { //espera a que le pase un product de tipo Product(interfaz), despues devuelve lo siguiente:
  await axios.post('/material', material)
}

//Funcion para borrar material
export const deleteMaterial = async (id: string): Promise<AxiosResponse<Material>> => 
  await axios.delete('/material/' + id) //Le pasaremos el id del producto

//Funcion que muestra un material pasandole un id
  export const getMaterial= async (id: string): Promise<Material> => 
    await axios.get('/material/' + id) //Le pasaremos el id del producto